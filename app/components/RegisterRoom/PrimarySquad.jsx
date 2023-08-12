import { useEffect, useState } from "react";
import Heading from "../Heading";

function PrimarySquad({ onSubmit, data }) {
  const [formData, setFormData] = useState({
    PPlayerOne: "",
    PPlayerTwo: "",
    PPlayerThree: "",
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <Heading
        title="Enter Primary Player Details"
        subtitle="Please enter player's In game ID."
      />
      <form className="grid mt-3 gap-y-4" id="primary" onSubmit={handleSubmit}>
        <input
          className="p-4 rounded-lg border-[1.5px]"
          placeholder="Player 1"
          type="text"
          name="PPlayerOne"
          required
          value={formData?.PPlayerOne}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              PPlayerOne: e.target.value,
            }))
          }
        />
        <input
          className="p-4 rounded-lg border-[1.5px]"
          placeholder="Player 2"
          type="text"
          name="PPlayerTwo"
          required
          value={formData?.PPlayerTwo}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              PPlayerTwo: e.target.value,
            }))
          }
        />
        <input
          className="p-4 rounded-lg border-[1.5px]"
          placeholder="Player 3"
          type="text"
          name="PPlayerThree"
          required
          value={formData?.PPlayerThree}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              PPlayerThree: e.target.value,
            }))
          }
        />
      </form>
    </div>
  );
}

export default PrimarySquad;
