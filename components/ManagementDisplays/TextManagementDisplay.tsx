import { PageText } from "@prisma/client"
import TextInput from "../admin/TextInput"
import Button from "../Button"
import { useState } from "react"

interface TextManagementDisplayProps {
  pageTexts: PageText[]
}
export default function TextManagementDisplay(props: TextManagementDisplayProps) {

  const [pageTexts, setPageTexts] = useState(props.pageTexts)

  return <>

    <div className="flex flex-col gap-8 pb-8">
      {
        pageTexts.map( (pageText, index) => {
          return (
            <div key={pageText.page} className="bg-black/50 px-5 py-3">
              <h2 className="text-3xl pb-2">{pageText.page}</h2>
              <TextInput
                placeholder={pageText.page}
                setValue={inputValue => {
                  const newPageTexts = [...pageTexts]
                  newPageTexts[index].content = inputValue
                  setPageTexts(newPageTexts)
                }}
              >
                {pageText.content}
              </TextInput>
            </div>
          )
        })
      }

      <div>
        <Button color="bg-green-500" action={() => {
          fetch('/api/admin/texts/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(pageTexts)
          }).then( res => {
            if (res.status === 200) {
              alert("Sparat!")
            } else {
              alert("Något gick fel")
            }
          })
        }}>
          Spara
        </Button>
      </div>

    </div >

  </>
}