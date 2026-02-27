import { GeneralSkill } from "@/type";
import { Plus } from "lucide-react";
import React, { useState } from "react";

type Props = {
  generalSkills: GeneralSkill[];
  setGeneralSkills: (generalSkills: GeneralSkill[]) => void;
};

const GeneralSkillForm: React.FC<Props> = ({
  generalSkills,
  setGeneralSkills,
}) => {
  const [newGeneralSkill, setNewGeneralSkill] = useState<GeneralSkill>({
    name: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fied: keyof GeneralSkill,
  ) => {
    setNewGeneralSkill({ ...newGeneralSkill, [fied]: e.target.value });
  };

  const handleAddGeneralSkill = () => {
    setGeneralSkills([...generalSkills, newGeneralSkill]);
    setNewGeneralSkill({
      name: "",
    });
  };

  return (
    <div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Compétences générales"
          value={newGeneralSkill.name}
          onChange={(e) => handleChange(e, "name")}
          className="input input-bordered w-full"
        />
      </div>
      <button onClick={handleAddGeneralSkill} className="btn btn-primary mt-4">
        Ajouter
        <Plus className="w-4" />
      </button>
    </div>
  );
};

export default GeneralSkillForm;
