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
      "Admin can navigate to each setting independently and make the changes there, instead of the initial modal.",
    highlight:
      "The idea was to present the behavior at the lowest level possible, applying modularity such that was easly scalable.",
    p1: "Admins will see a button on the nav bar with a count of the number of settings to review and from there, access the modal.",
    p2: "",
  },
];
