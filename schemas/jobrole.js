
export default {
  // computer name
  name: "jobrole",
  // visible title
  title: "Job Roles",
  type: "document",

  icon: () => "👷‍♂️🏋️‍♂️🖥️ 🏗️🚦🚀",
  fields: [
    {
      name: "name",
      title: "Job Role Name",
      description: "describe the job role",
      initialValue: "Front-End Development",
      type: "string",
    },
    {
      name: "namecompany",
      title: "Company Name",
      description: "what is the name of the company you worked for?",
      type: "string",
    },

    {
      name: "startmonth",
      title: "start month of job role",
      type: "array",
      of: [{ type: "reference", to: [{ type: "startmonth" }] }],
    },

    {
      name: "endingmonth",
      title: "end month of job role",
      type: "array",
      of: [{ type: "reference", to: [{ type: "endingmonth" }] }],
    },

    {
      name: "companyoutline",
      title: "outline of what company does || company profile || company exertise",
      description: "preivew of what the company is",
      type: "text",
    },
    {
      name: "roleoverview",
      title: "outline of the role || Project Outline",
      description: "summary of the role there",
      type: "text",
    },
    {
      name: "skillsapplied",
      title: "Skills Applied at the role || Skills Applied ",
      description: "a summary of the skills you applied at the role", 
      type: 'text',
 
    },
    {
      name: "skillslearned",
      title: "Skills Learned at the role",
      description: "optional technologies used, or a list of tehc, js, css, framworks and libraries ect ..",
      type: "text",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "namecompany",
        maxLength: 100,
      },
    },

    {
      name: "jobyear",
      title: "Job Year",
      type: "array",
      // can do reffernces to multiple meta/jobspec i.e. year, technology, location
      of: [{ type: "reference", to: [{ type: "jobyear" }] }],
    },
    {
      name: "joblocation",
      title: "Job Location",
      type: "array",
      // can do reffernces to multiple meta/jobspec i.e. year, technology, location
      of: [{ type: "reference", to: [{ type: "joblocation" }] }],
    },
  ],

  orderings: [
    {
      name: "startmonth",
      title: "start month of job role",
      by: [
        {field: 'startmonth', direction: 'desc'}
      ]
    },
  ],

  preview: {
    select: {
      title: "namecompany",
      joblocation0: "joblocation.0.name",
      jobyear0: "jobyear.0.name",
      startmonth0: "startmonth.0.name",
      endingmonth0: "endingmonth.0.name",
    },

    prepare: ({ title, ...jobyear }) => {
      // 1 filter undefined toppings out
      console.log("STAY");
      const previewJobY = Object.values(jobyear).filter(Boolean);
      // 2 return preview object for the pizza
      return {
        title,
        jobyear,
        subtitle: previewJobY.join(", "),
      };
    },
  },
};
    