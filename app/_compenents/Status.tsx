import React from "react";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import {
  ArrowUpRight,
  Code as CodeIcon,
  Figma as FigmaIcon,
  Home as HomeIcon,
  Link as LinkIcon,
  LucideIcon,
  Rss as RssIcon,
  Stethoscope as StethoscopeIcon,
} from "lucide-react";
import Link from "next/link";

const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="p-4 flex flex-col gap-2 w-full">
          <p className="text-sm text-muted-foreground">Side, fun Projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECT.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-sm text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url="/"
              />
            ))}
          </div>
        </Card>
        <Card className="p-3 flex-1 flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">Contact Me</p>

          <ContactCard
            name="@ItzMoha"
            image="https://scontent.fdkr7-1.fna.fbcdn.net/v/t39.30808-1/320493161_701370541512819_2315122260681653981_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=zjM4dIqh-3IQ7kNvgGzMjhq&_nc_ht=scontent.fdkr7-1.fna&oh=00_AYAaDtaepr_CXJJc1_-zJvulbXSwph2M5jUOZ7l4P4o2pQ&oe=6681FDDB"
            meduimImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEUAAAD////FxcX5+fn8/PzZ2dny8vJhYWE2Njbd3d3Nzc329vbr6+uysrLj4+Ofn59qamrT09NCQkJJSUkPDw+np6dSUlIiIiIqKipzc3OBgYGUlJQXFxe6urodHR1aWlqJiYm1wm3hAAAHa0lEQVR4nO2c55qqMBCGLaisYKEoujbu/yqPe9b5hszSQYjPM+9PFExkeiaZTBRFURRFURRFURRFURRFURRFURRFURTlvXzPKlgfu/7EkR4V7PoYcQnXr2kFfsdfcOf0pGXSy5BLeCwrJuNsOj3/tMVcwp6GXMKu6tUsvzs83V3jMfvehlxCUDWbRdT62aeNQ3NJ4x7HXEjoVc1mc2r56PuFnj0/vF1hfkmrJuO1FbRvUkjn1vb/aMr1RqMOFlkCvLJtO/u8gnEJhprL0xP4r9/cJW6GE/7Y6aaNkLi43R9uLk9xoB91zet4ZdM2psjH3UPOZRIfXr/6VTgeN/fGMuBgpgM4mCzHxUtRhYdkSxc0feQGczn3Ncq6kHr44pcvGFLa7IHsi98dkeVA3i0QMsEutZHrTBGR3QZxlibhIt9whVCb4F7/aWcYstmgyo/ff6mHDMXI0k2nh9rPWkH55YseCrJoW1Oe7tDkZV1NJnPytI6P/sdZi5j+zpspaBGGFtSzz+GMbpDmZEDcAlv6DftcS9ASvEovfcMo6wI7LAzQAaOrE3HiKU59JXsHZIe35uUT5Caots9sMG5vGmVNXBKoi3n9DPt8uFY84oG5NI4Z+gZ/q7BCB0oYnQpBi+iL8u2OwIni5K1puGKk8ttSxxFt631vGI6v0ciI8wiXXqYJXL7wBylfVJEu880q63Wac9cvpxvKF10qOv1xJ0GTzhuJmlcYbbFmXUaILvOIqMa5MQ3XCYK2KLjzAuXfWDIXFrRpal5no3vJuw2R6jNStmYukwm5SH9lXI7h2r0817nnUsxAJbJ6kH2dmfbZRaImSwUTNoPPDy0wyhn2lCYKeUIdbP4n6rLNKGegyNIxBW1yoVnK2D6GrZvbYZSzkEVbmKmyyxGnKUuIqwuMw6g86BWIQOABzThkp8k1nHGj/gIwPCFPKdlfL/MBZ2+3qqB6FJDCiDIxR5xstDhBmDWvew7Cika4Nq9zIECpzQPLoovOi7nvglZt5qIiuYd+/AZvFhtlBnUJX0ScXET+8fTIgOpXosYA4rMWpUxWkcnkCqM8t9AoZyDL5ezMwDFCHflsTSmmkphyrcKlAS9lozzOGOuDjF74+zsCATBOfbwR3yRQB1NtOBB48WWpgzEgyzU3rW7MSeWvIbPWwWSJyXL55qu534zJrAput4wwY4az8KrFdIRFy7bsCkaccjdUOsa4WhHjFQjXiUCgRjHdGiJyJQvTdZ5QEdhZVIypIE5flsuRESe6fD5GZzK5smx/gzp9hJd5gbXjhSgiIfi3PpZhYmqBcw6mdoRwnfaVZApBLFbYI7D8HBvAEadIjLlcti6400bQaykiTjSjOHanZibQdSFoK7ruf5DrRK4sAuQr7HPwQWpzpkHPzDpfRIGArOJYDWKxoh6Brb2Vpr8guxSlpx2lo+tPCgTIoomlJlQBnZ2VleZcYgia7BGAcfiQjPNJiHRMNjdRXF23Ic0CUPr7GybDC32KReN+7emfisAEH3xEmYb//Fyngh6B+TijawQrPzkVoev4/ANSGywzQ3FEPZY34lmfQ/Pek1tAlks4FfQI+Hb1NPxhD+VfuxFqnKagccQ5Rr98fY4Qoa8ok12KFhnUPTybU5sQBbLfl4HsUiwvoe4hjYNFJHLRMoYREBEnrMTNqramLH87SY50wRFfnclv2gbve2SpwvxEGSMk5bJ0ER05fnbgvF9ZRpyUJVjZqgGJMhsz0Se0FGUM6JeFgganMt0aDp+dyrogEPCsEzTeOSO30IYUd8qIE2K5aLCpawjKNvUgKJAf4Z11O0agbxL0XC9zeq65jGHGYtzDZZXrhA908vaZJJxdmjM9kkUbf5sGU7WpB2UMZ19wo0xHx+OBtZeibvkdfUPsLkFvV+tjBPrmiABsWxjRIwAVuwYQZW/tcJ0uov6S6v4VKZvcPkj/hBWbAq7Q7lLnh2L6XFg0soNWpDYoTzhp6ffgiETEiaWB7Vg7aJna29854pRLAySBo0ecDTb1QNA84SJJ0Mbe45QpxVS29+G8ClkRSEjQxm1F20N01jWKRlwgELGYWzDLQYl4x08t5YV2yB4BSOB4Fs1tvP2dV2iLmlHG6kVtsf2dd3HLLRoUcS77HmVN8DfLfqwSzkWNDXuyiuOkNlyKafL7SG2Ei7xjt9cYOfQZDqZR9M7Bz0ycjEJp9wi7tvlEvUUzc8o3SkF7SWDHo/hagBJe8xPAkI95ohmFBG3o0zSSLqf3sUE3r6NHYOAzW3izQosEMSmyHFga2AxZeuJFy1Yem8u4Rc0oA+bQXQ+94hVcT3xCguYPVnriZvhbS3EIOT41P0hw0NBAYU1m0bK1R8Dubm/3WGV4IEtI+xtwCb0cFJXwqtTcADu5vCEs2qmfnZZR9VGpvQ25GO4k6daQcPZLJvKf9/cJsVHuaj0PTslEfnDeLWhslDunhMmiZCL/yTmvok8y29+7++jKw5/f2yfE56v00i56KJvID/O0h19RFEVRFEVRFEVRFEVRFEVRFEVRFEVRlDL+AR/oTpDBFS89AAAAAElFTkSuQmCC"
            description="3'000"
          />
          <ContactCard
            name="Pether Essongue"
            image="https://scontent.fdkr7-1.fna.fbcdn.net/v/t39.30808-1/320493161_701370541512819_2315122260681653981_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=zjM4dIqh-3IQ7kNvgGzMjhq&_nc_ht=scontent.fdkr7-1.fna&oh=00_AYAaDtaepr_CXJJc1_-zJvulbXSwph2M5jUOZ7l4P4o2pQ&oe=6681FDDB"
            meduimImage="data:image/png;base64,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"
            description="1'000"
          />
        </Card>
      </div>
    </Section>
  );
};

const ContactCard = (props: {
  image: string;
  meduimImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 flex items-center justify-between transition-color group ">
      <div className="flex items-center gap-2">
        <div className="relative">
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full"
          />
          <img
            src={props.meduimImage}
            alt={props.name}
            className="w-4 h-4 absolute -bottom-1 -right-1"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">{props.name}</p>
          <p className="text-sm text-muted-foreground ">{props.description}</p>
        </div>
      </div>
      <ArrowUpRight
        className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform "
        size={16}
      />
    </Card>
  );
};

const SIDE_PROJECT: SideProjectsProps[] = [
  {
    Logo: FigmaIcon,
    title: "AutoLoc",
    description: "A social network with mini applications for businesses.",
    url: "/",
  },
  {
    Logo: CodeIcon,
    title: "SmartCar",
    description: "A social network with mini applications for businesses .",
    url: "/",
  },
  {
    Logo: StethoscopeIcon,
    title: "Hippocrate",
    description: "A social network with mini applications for businesses .",
    url: "/",
  },
  {
    Logo: RssIcon,
    title: "8",
    description: "A social network with mini applications for businesses .",
    url: "/",
  },
  {
    Logo: LinkIcon,
    title: "Echo Pub",
    description: "A social network with mini applications for businesses .",
    url: "/",
  },
  {
    Logo: FigmaIcon,
    title: "HomeConnect",
    description: "A social network with mini applications for businesses.",
    url: "/",
  },
];

const WORKS: WorkProps[] = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnmKHHlBWKAupDQBFNOijDXHV9UrjI2Nvig&s",
    title: "Item Senegal",
    role: "Software Developer",
    date: "Present",
    url: "/",
  },
  {
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHEBAQEhEQEhMWFRcVGBIVFhgQEhMUFRcXGRgVGBkYICghGBwlHRUVIT0kJTUrLi46GCAzODMvNygtLisBCgoKDg0OGRAQGy8lHSEtLTctLS0tMC83LzEuLS8rLS0tNS4tLS0rLS0tLSstListLS0tLTctLS0tLS0tLS0tLf/AABEIAMgAyAMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYEBwIDCAH/xABDEAABAwIDAwcIBwYHAQAAAAABAAIDBBEFEiEGMUEHEyJRYYGRFDJCUnGhscEVIzVyc8LRM0OCsvDxJDRTYpKi0hb/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAgQBAwYFB//EADYRAQACAQICBgcGBwEAAAAAAAABAgMEEQUhEhMxQVFhBiIycZHR4RQjgaGx8BUWJDNCUsE0/9oADAMBAAIRAxEAPwDeKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4ucGi50CCr4tt/h2GHKZuccPRiHOW9p3e9elg4Rq80bxXaPPl9WuctYQ55WaO9uZqLddmf+ld/l3U7e1X9/gh19UrhfKJh2IHLzpid1SjID37lUz8G1eKN+jvHklGWsrVG8SAEEEHcRqCvL7OUtrmgICAgICAgICAgICAgICAgICAgw8TxGLConzSuDWNFyfgB1lbMWG+a8UpG8yxMxEbtH7XbbVG0TixpdHBfSJp1d2vt5x7F2/D+E4tLHStzv4/JTvlm3uduBcnVdirQ9wbAw6gyecf4RqO9R1PHNNhno19afJmuG09qxDkhNv84M34Wn811538yzv/AG+XvT+z+aBxvk2rsNaXsDaho383o8fwnf3K/puPabLO1vVnzQthtCO2X2tqtmn2aS6O/Sgfe3dfzSrGt4Zg1dd+y3dMI0yTVvHAcahx6Fs8JuDoR6THDe09q4fU6bJp8k48kc1ytotG8JNaEhAQEBAQEBAQEBAQEBAQEBAQaT5VtojiNSaVjvqoTY23Ok4nu3eK7PgO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y55bt1BuNddPagsKAgICAgICAgICAgINU8seBm8dcwaWEcluHqO99vBdR6O6uI6WC3vj/qtnp3sXkp2sbQE0UzrMcbxuO5rjvYfb8Vt47w61/wCoxxzjt+bGHJt6stwLkloQEEdjWLw4JC6aZwa0bhxceDR1krdp9PfPeKY45ozaIjeWbDJzrWu6wD4rTMbTsk7EBAQEBAQEBAQEBAQEBAQEBAQY9ZSsrY3xSNDmOBBadxBUqXtS0WrO0wxMb8mjttNiZtn3ukYHSU5OjxqWX4P/AFXccN4tj1NYpflfw8fcp3xzXs7GRsxyj1ODtEco8oiGgzG0jQNNHce9a9bwLFmmb456Nvy+jNM0x2rpByq0Eg6TKhh6sod8CvFt6PaqJ5bT+LdGerAxTlaiaCKeB7ncHSEMb4NuSrGH0cyTO+W20eSM547oa7xbF6vaWYGRzpXE2ZG0dFt+DWhdDg0un0eOejyjvlota1p5vRNI0sjYDoQ1o8Avndp3tMr0O9YZEBAQEBAQEBAQEBAQEBAQEBAQcHsDwQQCDvB1BQUzHOTSixIl8eanefU1Zf7h+Vl7Gm45qcMbW9aPNpthrKry8kU4PRqoiO1jgfcvVj0lx7etSfi1/Z58WXQckdjeaquPVjZYnvd+i1ZfSSdvu6fGWY0/jK84DsxSYCPqIgHWsZD0pD3n5LwdVrs+pn7y3Lw7m6tK17E0qqYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/2Q==",
    title: "Bouygues Telecom",
    role: "Télé-Conseiiller",
    date: "2021",
    url: "/",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGq6bdmQxJ0tznPMQqtXKX1MZlF38W6HjLeQ&s",
    title: "IBC",
    role: "Assistant",
    date: "2021",
    url: "/",
  },
];

type SideProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectsProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-color p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-color p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded"
      />

      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};

export default Status;
