import type { Translations, Experience, Project } from './types';
import { TechnopatIcon } from './components/icons';

export const translations: Translations = {
  tr: {
    navLinks: [
      { id: 'hakkimda', label: 'Hakkımda' },
      { id: 'deneyim', label: 'Deneyim' },
      { id: 'projeler', label: 'Projeler' },
      { id: 'iletisim', label: 'İletişim' },
    ],
    home: {
      intro: 'Merhaba, ben',
      name: 'Atakan Karakuş',
      description: 'Yazılım Geliştirici & Teknoloji Meraklısı',
    },
    about: {
      title: 'Hakkımda',
      content: [
        "11 yaşımdan beri bilgisayarlarla ve teknolojiyle iç içeyim. Bu merak beni yazılım, özel ROM'lar, TWRP, root erişimi, kernel geliştirme ve Linux gibi derin konuları keşfetmeye yöneltti.",
        "Sadece yazılımla değil, aynı zamanda telefon ve bilgisayar donanım onarımı gibi pratik becerilerle de kendimi geliştirdim. Teknolojinin hem soyut hem de somut yönlerine hakimim.",
      ],
    },
    experience: {
      title: 'Deneyim',
    },
    projects: {
      title: 'Projelerim',
    },
    contact: {
      title: 'İletişime Geçin',
      content: 'Projeler hakkında konuşmak, işbirliği yapmak veya sadece merhaba demek için aşağıdan bana ulaşabilirsiniz. Her zaman yeni fikirlere ve fırsatlara açığım.',
      email: 'at4k4n.sh@gmail.com',
    },
    footer: {
      text: `© ${new Date().getFullYear()} Atakan Karakuş. Tüm hakları saklıdır.`,
    },
  },
  en: {
    navLinks: [
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    home: {
      intro: "Hello, I'm",
      name: 'Atakan Karakuş',
      description: 'Software Developer & Tech Enthusiast',
    },
    about: {
      title: 'About Me',
      content: [
        "I've been immersed in computers and technology since I was 11. This curiosity led me to explore deep topics like software, custom ROMs, TWRP, root access, kernel development, and Linux.",
        "I have developed not only my software skills but also practical abilities like phone and computer hardware repair. I am proficient in both the abstract and tangible aspects of technology.",
      ],
    },
    experience: {
      title: 'Experience',
    },
    projects: {
      title: 'My Projects',
    },
    contact: {
        title: 'Get in Touch',
        content: "Feel free to reach out to discuss projects, collaborate, or just say hello. I'm always open to new ideas and opportunities.",
        email: 'at4k4n.sh@gmail.com',
    },
    footer: {
      text: `© ${new Date().getFullYear()} Atakan Karakuş. All rights reserved.`,
    },
  },
};

export const experienceData: { [key: string]: Experience[] } = {
  tr: [
    {
      company: 'Technopat',
      logo: TechnopatIcon,
      title: 'Sosyal Moderatör',
      date: '12 Kasım 2024 - Günümüz',
      description: 'Technopat Sosyal forumlarında topluluk yönetimi, içerik denetimi ve kullanıcılara teknik destek sağlama görevlerini yürütüyorum.',
    },
  ],
  en: [
    {
      company: 'Technopat',
      logo: TechnopatIcon,
      title: 'Social Moderator',
      date: 'November 12, 2024 - Present',
      description: 'Responsible for community management, content moderation, and providing technical support to users on the Technopat Social forums.',
    },
  ],
};

export const projectsData: { [key: string]: Project[] } = {
  tr: [
    {
      title: '[TEST] Kernel Derleme Otomasyonu',
      description: 'Farklı Android cihazlar için kernel derleme sürecini otomatikleştiren bir Bash betiği.',
      tags: ['Bash', 'Linux', 'Android', 'Kernel'],
      url: 'https://github.com',
    },
    {
      title: '[TEST] Kişisel Portföy Sitesi',
      description: 'React ve Tailwind CSS kullanarak oluşturulmuş, yeteneklerimi ve projelerimi sergileyen modern bir web sitesi.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      url: 'https://github.com',
    },
    {
      title: '[TEST] TWRP Cihaz Ağacı',
      description: 'Belirli bir Android cihaz modeli için TWRP kurtarma imajı oluşturmayı sağlayan kaynak kodları.',
      tags: ['Android', 'TWRP', 'C++', 'Make'],
      url: 'https://github.com',
    },
  ],
  en: [
    {
      title: '[TEST] Kernel Build Automation',
      description: 'A Bash script that automates the kernel compilation process for various Android devices.',
      tags: ['Bash', 'Linux', 'Android', 'Kernel'],
      url: 'https://github.com',
    },
    {
      title: '[TEST] Personal Portfolio Website',
      description: 'A modern website built with React and Tailwind CSS to showcase my skills and projects.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      url: 'https://github.com',
    },
    {
      title: '[TEST] TWRP Device Tree',
      description: 'Source code that enables the creation of a TWRP recovery image for a specific Android device model.',
      tags: ['Android', 'TWRP', 'C++', 'Make'],
      url: 'https://github.com',
    },
  ],
};
