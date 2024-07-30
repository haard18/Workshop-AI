const Story = () => {
  const keywords = [
    "Adventure", "Mystery", "Castle", "Dragon", "Forest",
    "Treasure", "Wizard", "Quest", "Ancient", "Cursed",
    "Hero", "Battle", "Magic", "Kingdom", "Secret",
    "Journey", "Villain", "Legend", "Guardian", "Prophecy"
  ];

  const examplePrompt = `A brave **hero** embarks on a daring **quest** through an enchanted **forest** to uncover a hidden **treasure** guarded by a fearsome **dragon**. Along the way, they encounter an **ancient** **wizard** who reveals a **secret** **prophecy** about the fate of the **kingdom**. The hero must face the **cursed** **villain** in an epic **battle** to save the realm and fulfill the **legend**.`;

  // Function to render the example prompt with bold keywords
  const renderExamplePrompt = (prompt) => {
    const parts = prompt.split(/(\*\*.*?\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}><u>{part.slice(2, -2)}</u></strong>;
      }
      return part;
    });

    return parts;
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4 text-green-500">Story Generation</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Keywords</h2>
        <ul className="list-disc pl-6">
          {keywords.map((keyword, index) => (
            <li key={index} className="text-xl">{keyword}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Example Prompt</h2>
        <p className="text-xl">{renderExamplePrompt(examplePrompt)}</p>
      </div>
    </div>
  );
};

export default Story;
