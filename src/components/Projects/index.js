import React from "react";
import ProjectUse from "../ProjectList";


function Projects() {
    const myProjects = [
        {
            image: "../../assets/projects/beyond-the-peak.jpg",
            name: "beyond-the-peak.jpg",
            description: "Going out with the bois but tired of the same-old-same-old? This app generates a random drink, guaranteed to add some random fun to your evening. Level up by adding extra randomness if you dare.",
            depth: "Full-Stack with MySQL database",
            liveLink: "https://pacific-journey-17528.herokuapp.com/",
            gitLink: "https://github.com/glanctot/beyond-the-peak"
          },
          {
            image: "../../assets/projects/dinder.png",
            name: "dinder.png",
            description: "Designed for the person who wants a dog but just has no clue what kind of dog or where to start learning. A true entry-level app into the world of dog-ownership. It's like Tinder... for people seeking a new fur-friend.",
            depth: "MERN Stack",
            liveLink: "https://dinder-dog.herokuapp.com/",
            gitLink: "https://github.com/mnshaun24/doggy-days"
          },
          {
            image: "../../assets/projects/just-tech-it.jpg",
            name: "just-tech-it.jpg",
            description: "A tech blog for people to share information and resources related to the tech industry.",
            depth: "Full-Stack",
            liveLink: "https://just-tech-it.herokuapp.com/",
            gitLink: "https://github.com/mnshaun24/just-tech-it"
          },
          {
            image: "../../assets/projects/weather-for-you.jpg",
            name: "weather-for-you.jpg",
            description: "Check the weather and forecast in your local area or anywhere in the US. Utilizes local storage to save recently searched cities.",
            depth: "Front-End",
            liveLink: "https://mnshaun24.github.io/weather-for-you/",
            gitLink: "https://github.com/mnshaun24/weather-for-you"
          },
          {
            image: "../../assets/projects/biz-notes.jpg",
            name: "biz-notes.jpg",
            description: "For business professionals who want an easy, digestable note taker with a clean interface",
            depth: "Full-Stack",
            liveLink: "",
            gitLink: "https://github.com/mnshaun24/biz-notes"
          },
          {
            image: "../../assets/projects/readme.jpg",
            name: "readme.jpg",
            description: "Generates ReadMe files easily for projects. All functionality is through the terminal and ReadMe is auto generated after answering the prompts.",
            depth: "Back-End",
            liveLink: "https://biz-notes.herokuapp.com/",
            gitLink: "https://github.com/mnshaun24/ez-reader"
          },
          {
            image: "../../assets/projects/scheduler.jpg",
            name: "scheduler.jpg",
            description: "Simple scheduler for daily organization. Create, save, and edit tasks in the easy-to-understand interface.",
            depth: "Full-Stack",
            liveLink: "https://mnshaun24.github.io/make-a-date-daily-planner/",
            gitLink: "https://github.com/mnshaun24/make-a-date-daily-planner"
          }

              ]

      // return (
      //   <div className="container mx-auto grid grid-cols-2 space-y-4 space-x-3">
      //     <img src={require(`../../assets/projects/${myProjects[0].name}`)} alt="testing" key={myProjects[0].name} 
      //       className="rounded w-3/5 space-y-4 space-x-3" />
      //     <img src={require(`../../assets/projects/${myProjects[1].name}`)} alt="testing" key={myProjects[1].name}
      //       className="rounded w-3/5" />
      //     <img src={require(`../../assets/projects/${myProjects[2].name}`)} alt="testing" key={myProjects[2].name}
      //       className="rounded w-3/5" />
      //     <img src={require(`../../assets/projects/${myProjects[3].name}`)} alt="testing" key={myProjects[3].name}
      //       className="rounded w-3/5" />
      //     <img src={require(`../../assets/projects/${myProjects[4].name}`)} alt="testing" key={myProjects[4].name}
      //       className="rounded w-3/5" />
      //     <img src={require(`../../assets/projects/${myProjects[5].name}`)} alt="testing" key={myProjects[5].name}
      //       className="rounded w-3/5" />
      //     <img src={require(`../../assets/projects/${myProjects[6].name}`)} alt="testing" key={myProjects[6].name}
      //       className="rounded w-3/5" />
      //   </div>
      // )

    return (
                <section className="grid grid-cols-2 gap-8">
                  {myProjects.map(eachProject => {
                    return <ProjectUse project={eachProject} />
                  })}                 
                </section>
    )
    
}

export default Projects;