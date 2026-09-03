<template>
  <div class="pdf-tool">

    <h1>PDF Tools</h1>
    <!-- =========================
         MERGE PDF
    ========================== -->
    <section class="tool-section">

      <h2>Merge PDF Files</h2>

      <p class="description">
        Select multiple PDF files and combine them into one PDF.
      </p>

      <input
        type="file"
        accept="application/pdf"
        multiple
        @change="handleMergeFiles"
      />

      <!-- File list -->

      <div v-if="mergeFiles.length" class="file-list">

        <div
          v-for="(file, index) in mergeFiles"
          :key="file.id"
          class="file-item"
        >

          <span>
            {{ index + 1 }}. {{ file.file.name }}
          </span>

          <div class="file-buttons">

            <button
              @click="moveFileUp(index)"
              :disabled="index === 0"
            >
              ↑
            </button>

            <button
              @click="moveFileDown(index)"
              :disabled="index === mergeFiles.length - 1"
            >
              ↓
            </button>

            <button
              @click="removeMergeFile(index)"
            >
              Remove
            </button>

          </div>

        </div>

      </div>

      <button
        v-if="mergeFiles.length"
        class="primary-button"
        @click="mergePDFs"
        :disabled="isProcessing"
      >
        {{ isProcessing ? 'Merging...' : 'Merge PDFs' }}
      </button>

    </section>


    <!-- =========================
         EXTRACT PDF
    ========================== -->

    <section class="tool-section">

      <h2>Extract PDF Pages</h2>

      <p class="description">
        Select a PDF and enter the pages you want to extract.
      </p>

      <input
        type="file"
        accept="application/pdf"
        @change="handleExtractFile"
      />

      <div v-if="extractFile" class="extract-area">

        <p>
          Selected file:
          <strong>{{ extractFile.name }}</strong>
        </p>

        <label>
          Pages to extract
        </label>

        <input
          v-model="pageInput"
          type="text"
          placeholder="Example: 1, 3, 5-7"
        />

        <p class="hint">
          Examples:
          <br>
          <code>1</code>
          → page 1
          <br>
          <code>1, 3, 5</code>
          → pages 1, 3 and 5
          <br>
          <code>2-6</code>
          → pages 2 through 6
          <br>
          <code>1, 3-5, 8</code>
          → pages 1, 3, 4, 5 and 8
        </p>

        <button
          class="primary-button"
          @click="extractPages"
          :disabled="isProcessing"
        >
          {{ isProcessing ? 'Extracting...' : 'Extract Pages' }}
        </button>

      </div>

    </section>


    <!-- Error -->

    <p
      v-if="errorMessage"
      class="error"
    >
      {{ errorMessage }}
    </p>

  </div>
</template>


<script>

import { PDFDocument } from 'pdf-lib'


export default {

  name: 'BlogView ',

  data() {

    return {

      mergeFiles: [],

      extractFile: null,

      pageInput: '',

      isProcessing: false,

      errorMessage: ''

    }

  },


  methods: {

    // MERGE

    handleMergeFiles(event) {

      const files = Array.from(event.target.files)

      files.forEach(file => {

        this.mergeFiles.push({

          id: Date.now() + Math.random(),

          file: file

        })

      })

      event.target.value = ''

    },


    removeMergeFile(index) {

      this.mergeFiles.splice(index, 1)

    },


    moveFileUp(index) {

      if (index === 0) return

      const temp = this.mergeFiles[index]

      this.mergeFiles[index] = this.mergeFiles[index - 1]

      this.mergeFiles[index - 1] = temp

    },


    moveFileDown(index) {

      if (index === this.mergeFiles.length - 1) return

      const temp = this.mergeFiles[index]

      this.mergeFiles[index] = this.mergeFiles[index + 1]

      this.mergeFiles[index + 1] = temp

    },


    async mergePDFs() {

      this.errorMessage = ''

      this.isProcessing = true

      try {

        const mergedPdf = await PDFDocument.create()


        for (const item of this.mergeFiles) {

          const file = item.file

          const arrayBuffer = await file.arrayBuffer()

          const pdf = await PDFDocument.load(arrayBuffer)


          const pages = await mergedPdf.copyPages(
            pdf,
            pdf.getPageIndices()
          )


          pages.forEach(page => {

            mergedPdf.addPage(page)

          })

        }


        const pdfBytes = await mergedPdf.save()


        this.downloadPDF(
          pdfBytes,
          'merged.pdf'
        )


      } catch (error) {

        console.error(error)

        this.errorMessage =
          'Unable to merge the PDF files. Please make sure they are valid PDF files.'

      } finally {

        this.isProcessing = false

      }

    },


    // EXTRACT

    handleExtractFile(event) {

      const file = event.target.files[0]

      if (!file) return

      this.extractFile = file

      this.pageInput = ''

      this.errorMessage = ''

    },


    async extractPages() {

      this.errorMessage = ''

      if (!this.extractFile) {

        this.errorMessage =
          'Please select a PDF file.'

        return

      }


      if (!this.pageInput.trim()) {

        this.errorMessage =
          'Please enter the pages you want to extract.'

        return

      }


      this.isProcessing = true


      try {

        const arrayBuffer =
          await this.extractFile.arrayBuffer()


        const sourcePdf =
          await PDFDocument.load(arrayBuffer)


        const totalPages =
          sourcePdf.getPageCount()


        const pageNumbers =
          this.parsePageNumbers(
            this.pageInput,
            totalPages
          )


        if (!pageNumbers.length) {

          throw new Error(
            'No valid pages were selected.'
          )

        }


        const newPdf =
          await PDFDocument.create()


        const pageIndexes =
          pageNumbers.map(page => page - 1)


        const copiedPages =
          await newPdf.copyPages(
            sourcePdf,
            pageIndexes
          )


        copiedPages.forEach(page => {

          newPdf.addPage(page)

        })


        const pdfBytes =
          await newPdf.save()


        this.downloadPDF(
          pdfBytes,
          'extracted-pages.pdf'
        )


      } catch (error) {

        console.error(error)

        this.errorMessage =
          error.message ||
          'Unable to extract the pages.'

      } finally {

        this.isProcessing = false

      }

    },


    // PAGE PARSER

    parsePageNumbers(input, totalPages) {

      const pages = []

      const parts =
        input.split(',')


      for (const part of parts) {

        const value = part.trim()


        // Range: 2-6

        if (value.includes('-')) {

          const range =
            value.split('-')


          if (range.length !== 2) {

            throw new Error(
              `Invalid page range: ${value}`
            )

          }


          const start =
            parseInt(range[0].trim())


          const end =
            parseInt(range[1].trim())


          if (
            isNaN(start) ||
            isNaN(end) ||
            start < 1 ||
            end > totalPages ||
            start > end
          ) {

            throw new Error(
              `Invalid page range: ${value}`
            )

          }


          for (
            let i = start;
            i <= end;
            i++
          ) {

            pages.push(i)

          }

        }


        // Single page: 5

        else {

          const page =
            parseInt(value)


          if (
            isNaN(page) ||
            page < 1 ||
            page > totalPages
          ) {

            throw new Error(
              `Invalid page number: ${value}`
            )

          }


          pages.push(page)

        }

      }

      // Remove duplicates

      return [...new Set(pages)]

    },


    // DOWNLOAD

    downloadPDF(bytes, filename) {

      const blob = new Blob(
        [bytes],
        {
          type: 'application/pdf'
        }
      )


      const url =
        URL.createObjectURL(blob)


      const link =
        document.createElement('a')


      link.href = url

      link.download = filename

      document.body.appendChild(link)

      link.click()

      document.body.removeChild(link)

      URL.revokeObjectURL(url)

    }

  }

}

</script>


<style scoped>

.pdf-tool {

  max-width: 900px;

  margin: 0 auto;

  padding: 40px 20px;

  font-family: Arial, sans-serif;

}


h1 {

  text-align: center;

  margin-bottom: 40px;

}


.tool-section {

  border: 1px solid #ddd;

  border-radius: 12px;

  padding: 25px;

  margin-bottom: 30px;

}


.tool-section h2 {

  margin-top: 0;

}


.description {

  color: #666;

}


.file-list {

  margin-top: 20px;

}


.file-item {

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 15px;

  padding: 12px;

  border: 1px solid #ddd;

  border-radius: 8px;

  margin-bottom: 8px;

}


.file-buttons {

  display: flex;

  gap: 5px;

}


button {

  border: none;

  border-radius: 6px;

  padding: 8px 12px;

  cursor: pointer;

}


button:disabled {

  opacity: 0.4;

  cursor: not-allowed;

}


.primary-button {

  margin-top: 20px;

  background: #2563eb;

  color: white;

  padding: 12px 20px;

  font-size: 16px;

}


.extract-area {

  margin-top: 20px;

}


.extract-area label {

  display: block;

  margin-bottom: 8px;

  font-weight: bold;

}


.extract-area input {

  width: 100%;

  box-sizing: border-box;

  padding: 12px;

  border: 1px solid #ccc;

  border-radius: 6px;

  font-size: 16px;

}


.hint {

  color: #666;

  line-height: 1.7;

}


.error {

  color: #dc2626;

  background: #fee2e2;

  padding: 12px;

  border-radius: 6px;

}


</style>