
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [copied, setCopied] = useState(false);
  const scriptText = `script_key="PASTKEYHERE";
(loadstring or load)(game:HttpGet("https://getnative.cc/script/loader"))()`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(scriptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-background min-h-screen flex items-center justify-center p-4">
      <div className="stars"></div>
      <div className="twinkling"></div>
      
      <Card className="w-full max-w-sm rounded-xl border-2 border-purple-500 bg-black/80 backdrop-blur-md text-white shadow-[0_0_15px_rgba(155,135,245,0.5)]">
        <CardHeader className="border-b border-purple-500/30">
          <CardTitle className="text-center text-xl font-bold text-purple-300">Script Loader</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-sm text-purple-200 relative overflow-x-auto">
            <pre className="whitespace-pre-wrap">{scriptText}</pre>
          </div>
          <Button 
            onClick={copyToClipboard} 
            className="w-full bg-purple-700 hover:bg-purple-600 transition-all"
          >
            {copied ? "Copied!" : "Copy Script"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
