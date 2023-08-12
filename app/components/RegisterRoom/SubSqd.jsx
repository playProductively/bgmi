import { useEffect, useState } from "react";
import Heading from "../Heading";

function PrimarySquad({ onSubmit, data }) {
  const [formData, setFormData] = useState({
    SPlayerOne: "",
    SPlayerTwo: "",
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
        title="Enter Additional Player Details"
        subtitle="Incase if anyone fails to login, following players can play. Click next if not required."
      />
      <form className="grid mt-3 gap-y-4" id="primary" onSubmit={handleSubmit}>
        <input
          className="p-4 rounded-lg border-[1.5px]"
          placeholder="Player 1"
          type="text"
          name="SPlayerOne"
          value={formData?.SPlayerOne}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              SPlayerOne: e.target.value,
            }))
          }
        />
        <input
          className="p-4 rounded-lg border-[1.5px]"
          placeholder="Player 2"
          type="text"
          name="SPlayerTwo"
          value={formData?.SPlayerTwo}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              SPlayerTwo: e.target.value,
            }))
          }
        />
      </form>
    </div>
  );
}

export default PrimarySquad;
