"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );

  const [aiOutput,setAiOutput]=useState<string>('')
  const [loading,setLoading]=useState(false);
  const GenerateAIContent =async (formData: any) => {
    setLoading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt;

    const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;

    const result=await chatSession.sendMessage(FinalAIPrompt);

    // console.log(result.response.text());
    setAiOutput(result?.response.text());
    setLoading(false);
  };
  return (
    <div className="p-5">
        <Link href={"/dashboard"}>
        <Button className="bg-purple-400"><ArrowLeft/>Kembali</Button>
        </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-3">
        {/* formsection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        {/* outputsection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
