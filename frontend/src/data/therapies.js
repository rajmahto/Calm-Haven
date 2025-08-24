import meditationImg from "../assets/meditation.jpg";
import musicImg from "../assets/music.jpg";
import yogaImg from "../assets/yoga.jpg";
import readingImg from "../assets/reading.jpg";
import laughingImg from "../assets/laughing.jpg";
import talkingImg from "../assets/talking.jpg";
import doctorImg from "../assets/doctor.jpg";
import spiritualImg from "../assets/spiritual.jpg";
import childImg from "../assets/child.jpg";
import breathingImg from "../assets/breathing.jpg";

const therapies = [
  {
    name: "Meditation Therapy",
    image: meditationImg,
    description: "A practice that promotes relaxation and mindfulness.",
    path: "meditation",
  },
  {
    name: "Music Therapy",
    image: musicImg,
    description: "Healing through sound and musical vibrations.",
    path: "music",
  },
  {
    name: "Yoga Therapy",
    image: yogaImg,
    description: "Body and mind balance through yoga postures and breathing.",
    path: "yoga",
  },
  {
    name: "Reading Therapy",
    image: readingImg,
    description: "Improve your mental well-being by reading inspiring books.",
    path: "reading",
    link: "https://www.goodreads.com/",
  },
  {
    name: "Laughing Therapy",
    image: laughingImg,
    description: "Boost your mood and health with laughter sessions.",
    path: "laughing",
  },
  {
    name: "Talking Therapy",
    image: talkingImg,
    description: "Express yourself and relieve stress through conversations.",
    path: "talking",
  },
  {
    name: "Consult a Doctor",
    image: doctorImg,
    description: "Get expert mental health advice from professionals.",
    path: "doctor",
    link: "https://www.practo.com/",
  },
  {
    name: "Spiritual Therapy",
    image: spiritualImg,
    description: "Connect with spirituality for inner peace and healing.",
    path: "spiritual",
  },
  {
    name: "Child Therapy",
    image: childImg,
    description: "Specialized therapy to help children with mental well-being.",
    path: "child-therapy",
  },
  {
    name: "Breathing Exercises",
    image: breathingImg,
    description: "Practice deep breathing techniques to reduce stress.",
    path: "breathing",
    link: "https://www.xhalr.com/",
  },
];

export default therapies;
