import { useState } from "react";
import { Loader2, Copy, Wand2 } from "lucide-react";
import { Button } from "./ui/button.jsx"
import { Textarea } from "./ui/textarea"
import { BASE_URL } from "../apis/api.js";

const PromptImprover = () => {
  const [prompt, setPrompt] = useState("");
  const [improvedPrompt, setImprovedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [servererror, setservererror] = useState("")
  const [error, seterror] = useState("")
  const [toast, settoast] = useState("")
  // const { toast } = useToast();

  const improvePrompt = async () => {
    if (!prompt.trim()) {
      return;
    }
    setIsLoading(true);

    try {
      setImprovedPrompt("")
      const response=await fetch(`${BASE_URL}/ai`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({prompt})
      })

      // const data=await response.text()
      const reader=response.body.getReader()
      const decoder=new TextDecoder();

      const read= async ()=>{
        while(true){
          const {done,value}= await reader.read()
          if(done) break;
          const chunk=decoder.decode(value,{stream:true})
          // console.log(chunk);
          setImprovedPrompt(prev=> prev + chunk)
        }
        
        
      }
      read()
    } catch (error) {
      console.log(error);
      
      setservererror("Something went wrong")
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(improvedPrompt);
      settoast("Copied to clipboard!")
      setTimeout(() => {
        settoast("")
      }, [2000])
    } catch (error) {
      seterror("Failed to copy")
        setTimeout(() => {
        seterror("")
      }, [2000])
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          AI Prompt Improver
        </h1>
        <p className="text-gray-600">
          Enter your prompt below and let AI help you make it better
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-bold ">Your Prompt</label>
          {servererror && <div className="space-y-2 text-red-500 text-[14px]">{servererror}</div>}
          <Textarea
            placeholder="Enter your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        <Button
          onClick={improvePrompt}
          className="w-full bg-blue-600 hover:bg-blue-700  text-white cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Improving...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Improve Prompt
            </>
          )}
        </Button>

        {improvedPrompt && (
          <div className="space-y-2 animate-in fade-in-50">
            {toast && <div className="border px-3 py-1 bg-green-400 text-white font-bold text-[14px] rounded-sm ">{toast}</div>}
            {error && <div className="border px-3 py-1 bg-red-400 text-white font-bold text-[14px] rounded-sm ">{error}</div>}
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold">Improved Version</label>
              <Button
                size="sm"
                onClick={copyToClipboard}
                className="h-8 cursor-pointer"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
            <div className="relative text-black">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-blue-200/50 rounded-lg" />
              <Textarea
                value={improvedPrompt}
                readOnly
                className=" bg-transparent relative z-10"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptImprover;
