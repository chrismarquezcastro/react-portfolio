export const cover = [
  {
    id: "1",
    title: "Admin needs to update security settings",
    metaData: "Kiteworks  |  Q2 – 2021  |  Palo Alto, California",
  },
];

export const designProblem = [
  {
    problemsObservedP1:
      "Kiteworks admins are in charge of enabling the business processes and reducing the risks to the system and the data. Some settings could be misused, opening the content and / or system to vulnerabilities that could create serious problems for the customer organization, as well as the Kiteworks organization.",
    problemsObservedP2:
      "People working as Admins usually have little time to spare, so a focused experience automatically presented upon update or sign in, will allow affected admins to confirm the security settings that apply to their system.",
    hypothesisP1:
      "One of the top priorities of the administrators is to keep the system secure against bad actors and poor decision making.",
    hypothesisP2:
      "Admins are willing to rapidly take action on security related issues.",
    hypothesisP3:
      "Admins are capable of making this decision, either on the spot or later in the short term.",
    stakeholderRequestP1:
      "The Kiteworks security team identified a few settings that would like system admins to review and confirm the state of these settings to prevent risks.",
    stakeholderRequestP2:
      "Enabling admins to confirm the settings with high clarity and without much disruption.",
    stakeholderRequestP3:
      "Another goal was to push the admin to interact with the workflow with high urgency.",
    solveProblemP1:
      "First I spoke to the security team members to understand the kind of settings and the risks involved with each.",
    solveProblemP2:
      "I worked with the Product Manager on the team to identify the number of customers that had the security settings activated.",
    solveProblemP3:
      "Once I understood the risks and the scope of the problem, I set myself to prototype ideas for the interaction scenarios.",
    solveProblemP4:
      "Using the prototype I tested the user experience flows with team members from UX, PM, Engineering, and Support as well as real customer’ admins to validate the ideas and iterate the prototype.",
  },
];

export const myRole = [
  {
    collaborationP1:
      "As Product Designer, my goal is to gain enough insights into the problem to produce ideas that can be tested and improved toward solving the problem efficiently.",
    collaborationP2:
      "I partner with UX team members to brainstorm ideas to re-use content and patterns, and to develop the cohesive style, including voice.",
    collaborationP3:
      "I partner with Product Managers to better understand the impact of the problem in the organization as a whole, they also are great advocates for the customer and the end user.",
    collaborationP4:
      "I partner with Engineers to brainstorm ideas and the potential opportunities provided by technology, as well as to implement the UI design to the best quality.",
    facilitationP1:
      "Initially I had multiple interviews with stake-holders to gain insights, most cases during video calls 1-1. Once I produced the first prototype I started having review meetings with larger groups from different teams.",
    facilitationP2:
      "Once the UX design is mostly defined I do a kick-off meeting with the Engineering team that is going to work on the feature to present and answer questions about the project.",
    teamImpactP1:
      "The new component in the admin interface now allows the admin to use another entry point and interaction model to present urgent workflows to the admin upon either update or sign in.",
  },
];

export const videoSlides = [
  {
    id: 1,
    title: "Admin is prompted to verify a list of security settings.",
    highlight:
      "This was one of the first ideas tested at the interaction level, and was constantly iterated as the main entry point.",
    p1: "The list is organized by sections that map to the Admin UI information architecture.",
    p2: "When the user changes the settings to reduce the risk, the item is then removed from the list.",
  },
  {
    id: 2,
    title: "Admin can confirm the current state of the settings.",
    highlight:
      "This idea was proposed and refined together the PM and UX teams, particularly working with the VP of Product and the UX writer.",
    p1: "The interaction model adds some friction to the confirmation process, but most importantly it tracks down the admin who confirmed as a clear event on the log.",
    p2: "Once the security setting is confirmed, it disappears from the list.",
  },
  {
    id: 3,
    title:
      "Admin can decide whether or not to engage with the interaction at that time.",
    highlight:
      "This is a must in UX, never trap the user, even if we as designers this is for their own good. Is better to inform and give control to people.",
    p1: "By design we added some friction added to try to persuade the admin to reconsider and review the security settings there and then.",
    p2: "",
  },
  {
    id: 4,
    title:
      "Admin can navigate to each setting independently and make the changes there, instead of the initial the modal.",
    highlight:
      "The idea was to present the behavior at the lowest level possible, applying modularity such that was easly scalable.",
    p1: "Admins will see a button on the nav bar with a count of the number of settings to review and from there, access the modal.",
    p2: "",
  },
];

export const solutionSolved = [
  {
    p1: "More than 80% of customers engaged with the interaction and completed the workflow, this caused minimal impact in the customer support organization, which eventually converted the remaining customers.",
    p2: "Less customers out there with potential exposures, and for those remaining now there is a record of someone manually confirming the setting in case of a dispute.",
  },
];

export const imageSlides = [
  {
    id: 1,
    title: "UX + Product owner",
    highlight:
      "This is the most complex project I had to extend my role into the Product Management realm.",
    p1: "I already took on the role of product owner for many projects, mostly UX improvements, but this was the first time a critical item on the release was in large part my responsibility.",
  },
  {
    id: 2,
    title: "Critical ciber security subjects and interactions",
    highlight:
      "I spent extensive time with security engineers and stake-holders to comprehend the implications of the risks, so that I could explain those in the UI to admins in the varios UX contexts.",
    p1: "This included training the customer support and customer success teams before release and stay close to them to hear from any blowback.",
  },
  {
    id: 3,
    title: "Multiple and complicated workflows",
    highlight:
      "The interaction had multiple entry and decision points cascaded throughout the whole Admin User Experience.",
    p1: "To a certain extent the entire set of features in the admin UI had to be considered as part of an entire framework that guides the admin to set the system in the most secure and comprehensive form.",
  },
  {
    id: 4,
    title: "Large number of iterations per component",
    highlight:
      "Usually when creating a new set of components, this involves more iterations than an improvement.",
    p1: "What was extraordinary in this case is the complexity and sensitivity of each item, such that almost every word had to be reviewed multiple times.",
  },
  {
    id: 5,
    title: "Extensive UX writing collaboration",
    highlight:
      "It was critical to hit the right tone between urgency, formality and simplicity.",
    p1: "This project also included an extensive email communication to complement the workflow in the UI, including emails prior to the interaction taking place, email triggered by the update, emails triggered by inaction from admins.",
  },
];

export const impact = [
  {
    p1: "Customers reduced their risk exposure, and the admins have now a better understanding of the impact of sensitive settings in the system.",
    p2: "If a customer gets impacted by an attack, indirectly impacts the vendor in this case Kiteworks, so a reduced risk on customers also reduces the risk for the Kiteworks organization.",
    p3: "The product organization also has now a new UI component to leverage for similar UX requirements, which has already happened.",
  },
];

export const lessons = [
  {
    p1: "First I spoke to the security team members to understand the kind of settings and the risks involved with each.",
    p2: "I worked with the Product Manager on the team to identify the number of customers that had the security settings activated.",
    p3: "Once I understood the risks and the scope of the problem, I set myself to prototype ideas for the interaction scenarios.",
    p4: "Using the prototype I tested the user experience flows with team members from UX, PM, Engineering, and Support as well as real customer’ admins to validate the ideas and iterate the prototype.",
  },
];
