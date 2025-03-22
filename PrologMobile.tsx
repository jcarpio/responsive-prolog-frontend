const handleRun = async () => {
  try {
    const response = await fetch("https://responsive-prolog-backend.onrender.com/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const data = await response.json();

    if (data.output) {
      setOutput(data.output);
    } else if (data.error) {
      setOutput("⚠️ Error: " + data.error);
    }
  } catch (err) {
    setOutput("⚠️ Error de red al conectar con el servidor.");
  }
};
