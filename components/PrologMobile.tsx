import { useState } from "react";

export default function PrologMobile() {
  const [code, setCode] = useState("?- member(X, [1,2,3]).");
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    const response = await fetch("https://responsive-prolog-backend.onrender.com/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data = await response.json();
    if (data.output) setOutput(data.output);
    else setOutput("⚠️ Error: " + (data.error || "Error desconocido"));
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100 flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">Prolog Mobile</h1>

      <textarea
        className="w-full h-40 p-2 font-mono text-sm"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button className="bg-blue-600 text-white py-2 px-4 rounded" onClick={handleRun}>
        Ejecutar
      </button>

      <pre className="bg-black text-white p-4 font-mono text-sm whitespace-pre-wrap">
        {output || "Resultados aparecerán aquí..."}
      </pre>
    </div>
  );
}
