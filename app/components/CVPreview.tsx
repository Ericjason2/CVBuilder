import Image from "next/image";
import {
  Education,
  Experience,
  GeneralSkill,
  Hobby,
  PersonalDetails,
} from "@/type";
import React from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPinCheckInside,
  Phone,
} from "lucide-react";

type Props = {
  personalDetails: PersonalDetails;
  file: File | null;
  theme: string;
  experiences: Experience[];
  educations: Education[];
  generalSkills: GeneralSkill[];
  hobbies: Hobby[];
  download?: boolean;
  ref?: any;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("fr-FR", options);
}

const CVPreview: React.FC<Props> = ({
  personalDetails,
  file,
  theme,
  experiences,
  educations,
  generalSkills,
  hobbies,
  download,
  ref,
}) => {
  return (
    <div
      ref={ref}
      className={` flex p-16 w-[950px] h-[1200px] bg-base-100 shadow-lg ${
        download ? "mb-10" : ""
      }`}
      data-theme={theme}
    >
      <div className="flex flex-col w-1/3">
        <div className="h-60 rounded-full border-8 overflow-hidden border-primary">
          {file && (
            <Image
              src={URL.createObjectURL(file)}
              width={300}
              height={300}
              className="w-full h-full rounded-lg object-cover"
              alt="Picture of the author"
              onLoadingComplete={() => {
                if (typeof file !== "string") {
                  URL.revokeObjectURL(URL.createObjectURL(file));
                }
              }}
            />
          )}
        </div>

        <div className="mt-4 flex-col w-full">
          <div>
            <h1 className="uppercase font-bold my-2">Contact</h1>
            <ul className="space-y-2">
              <li className="flex">
                <div className="break-all text-sm relative">
                  <div className="ml-8">{personalDetails.phone}</div>
                  {personalDetails.phone && (
                    <div className="absolute left-0 top-0">
                      <Phone className="w-5 text-primary" />
                    </div>
                  )}
                </div>
              </li>
              <li className="flex">
                <div className="break-all text-sm relative">
                  <div className="ml-8">{personalDetails.email}</div>
                  {personalDetails.email && (
                    <div className="absolute left-0 top-0">
                      <Mail className="w-5 text-primary" />
                    </div>
                  )}
                </div>
              </li>
              <li className="flex">
                <div className="break-all text-sm relative">
                  <div className="ml-8">{personalDetails.address}</div>
                  {personalDetails.address && (
                    <div className="absolute left-0 top-0">
                      <MapPinCheckInside className="w-5 text-primary" />
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="uppercase font-bold my-2">Compétences Générales</h1>
          <div className="flex flex-col space-y-2">
            {generalSkills.map((generalSkill, index) => (
              <p key={index} className="badge badge-primary uppercase">
                {generalSkill.name}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h1 className="uppercase font-bold my-2">Compétences Générales</h1>
          <div className="flex flex-col space-y-2">
            {hobbies.map((hobby, index) => (
              <p key={index} className="capitalize">
                <span>{hobby.name}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/3 ml-8">
        <div className="w-full flex flex-col space-y-4">
          <h1 className="uppercase text-3xl">{personalDetails.fullName}</h1>
          <h2 className="uppercase text-4xl text-primary font-bold">
            {personalDetails.postSeeking}
          </h2>
          <p className="break-all w-full text-sm">
            {personalDetails.description}
          </p>
        </div>
        <section className="w-full h-fit p-5">
          <div>
            <h1 className="uppercase font-bold mb-2">
              Experiences Professionnelles
            </h1>
            <ul className="steps steps-vertical space-y-3">
              {experiences.map((exp, index) => (
                <li key={index} className="step step-primary">
                  <div className="text-left">
                    <h2 className="flex text-md uppercase font-bold">
                      <BriefcaseBusiness className="w-5" />
                      <span className="ml-2">{exp.jobTitle}</span>
                    </h2>
                    <div className="text-sm my-2">
                      <span className="badge badge-primary">
                        {exp.companyName}
                      </span>
                      <span className="italic ml-2">
                        {formatDate(exp.startDate)} au
                        {formatDate(exp.endDate)}
                      </span>
                    </div>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="ùt-6">
            <h1 className="uppercase font-bold mb-2">Formations</h1>
            <ul className="steps steps-vertical space-y-3">
              {educations.map((edu, index) => (
                <li key={index} className="step step-primary">
                  <div className="text-left">
                    <h2 className="flex text-md uppercase font-bold">
                      <GraduationCap className="w-5" />
                      <span className="ml-2">{edu.degree}</span>
                    </h2>
                    <div className="text-sm my-2">
                      <span className="badge badge-primary">{edu.school}</span>
                      <span className="italic ml-2">
                        {formatDate(edu.startDate)} au
                        {formatDate(edu.endDate)}
                      </span>
                    </div>
                    <p className="text-sm">{edu.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CVPreview;
