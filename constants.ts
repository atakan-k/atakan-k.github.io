import type { Translations, Experience, Project } from './types.ts';
import { technopatLogo, projectImage1, projectImage2, projectImage3 } from './assets.ts';

export const socialLinks = {
  github: 'https://github.com/atakank-k',
  linkedin: 'https://linkedin.com/in/atakank-k',
  x: 'https://x.com/atakank-k',
  instagram: 'https://instagram.com/atakank-k',
};

export const translations: Translations = {
  tr: {
    navLinks: [
      { id: 'hakkimda', label: 'Hakkımda' },
      { id: 'deneyim', label: 'Deneyim' },
      { id: 'projeler', label: 'Projeler' },
      { id: 'iletisim', label: 'İletişim' },
    ],
    sidebar: {
      title: "Projeler",
    },
    projectPages: {
      backButton: "Tüm Projelere Geri Dön",
    },
    home: {
      intro: 'Merhaba, ben ',
      name: 'Atakan Karakuş',
      fullIntro: 'Merhaba, ben Atakan Karakuş',
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
    sidebar: {
      title: "Projects",
    },
    projectPages: {
      backButton: "Back to All Projects",
    },
    home: {
      intro: "Hello, I'm ",
      name: 'Atakan Karakuş',
      fullIntro: "Hello, I'm Atakan Karakuş",
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
      logo: technopatLogo,
      title: 'Sosyal Moderatör',
      date: '12 Kasım 2024 - Günümüz',
      description: 'Technopat Sosyal forumlarında topluluk yönetimi, içerik denetimi ve kullanıcılara teknik destek sağlama görevlerini yürütüyorum.',
    },
  ],
  en: [
    {
      company: 'Technopat',
      logo: technopatLogo,
      title: 'Social Moderator',
      date: 'November 12, 2024 - Present',
      description: 'Responsible for community management, content moderation, and providing technical support to users on the Technopat Social forums.',
    },
  ],
};

export const projectsData: { [key: string]: Project[] } = {
  tr: [
    {
      id: 'kernel-automation',
      title: '[TEST] Kernel Derleme Otomasyonu',
      description: 'Farklı Android cihazlar için kernel derleme sürecini otomatikleştiren bir Bash betiği.',
      longDescription: [
        "Bu proje, Android kernel geliştirme sürecinde tekrarlanan derleme adımlarını ortadan kaldırmak amacıyla geliştirilmiştir. Bash kullanılarak yazılan bu betik, belirli bir cihaz için gerekli olan derleyici (toolchain) ve yapılandırma dosyalarını otomatik olarak ayarlar.",
        "Betiği çalıştırdığınızda, en güncel kaynak kodunu çeker, gerekli yamaları uygular ve derleme işlemini başlatır. Sonuç olarak, kuruluma hazır bir 'AnyKernel3' formatında zip paketi oluşturur. Bu otomasyon, geliştirme döngüsünü önemli ölçüde hızlandırır ve insan hatası olasılığını azaltır.",
        "Gelecekteki planlar arasında, farklı Android sürümleri için otomatik yapılandırma profilleri eklemek ve Docker entegrasyonu ile derleme ortamını standardize etmek yer alıyor."
      ],
      tags: ['Bash', 'Linux', 'Android', 'Kernel'],
      url: `${socialLinks.github}/kernel-automation`,
      imageUrl: projectImage1,
    },
    {
      id: 'portfolio-website',
      title: '[TEST] Kişisel Portföy Sitesi',
      description: 'React ve Tailwind CSS kullanarak oluşturulmuş, yeteneklerimi ve projelerimi sergileyen modern bir web sitesi.',
       longDescription: [
        "Şu anda incelemekte olduğunuz bu web sitesi, modern web teknolojilerini kullanarak geliştirdiğim kişisel bir projedir. Amacım, hem teknik yeteneklerimi sergilemek hem de sade ve etkileşimli bir kullanıcı deneyimi sunmaktı.",
        "Projede, bileşen tabanlı mimari için React, hızlı ve duyarlı tasarım için Tailwind CSS kullanılmıştır. Site, Türkçe ve İngilizce dil desteği sunmakta ve tüm cihazlarda sorunsuz bir şekilde görüntülenecek şekilde tasarlanmıştır. Arka plandaki dinamik aurora efektleri gibi ince animasyonlar, siteye canlılık katmaktadır.",
        "React Router DOM kullanılarak proje detay sayfaları gibi alt sayfalar oluşturulmuş, böylece tek sayfa uygulaması (SPA) deneyimi sağlanmıştır. State yönetimi için React Context API'den faydalanılmıştır."
      ],
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      url: `${socialLinks.github}/portfolio-website`,
      imageUrl: projectImage2,
    },
    {
      id: 'twrp-device-tree',
      title: '[TEST] TWRP Cihaz Ağacı',
      description: 'Belirli bir Android cihaz modeli için TWRP kurtarma imajı oluşturmayı sağlayan kaynak kodları.',
      longDescription: [
        "Bu proje, özel bir Android cihazı için Team Win Recovery Project (TWRP) imajı oluşturmak üzere gereken tüm yapılandırma dosyalarını ve aygıt ağacını içerir.",
        "Aygıt ağacı, TWRP'nin cihazın donanım bileşenleriyle (ekran, dokunmatik, depolama vb.) doğru bir şekilde iletişim kurmasını sağlar. Bu proje üzerinde çalışarak, Android'in alt seviye yapılandırması, 'make' sistemleri ve bölüm tabloları hakkında derinlemesine bilgi edindim.",
        "Başarılı bir derleme sonucunda, özel ROM'lar yüklemek, yedek almak veya sisteme root erişimi sağlamak gibi işlemler için kullanılabilen tamamen işlevsel bir kurtarma imajı elde edilir."
      ],
      tags: ['Android', 'TWRP', 'C++', 'Make'],
      url: `${socialLinks.github}/twrp-device-tree`,
      imageUrl: projectImage3,
    },
  ],
  en: [
    {
      id: 'kernel-automation',
      title: '[TEST] Kernel Build Automation',
      description: 'A Bash script that automates the kernel compilation process for various Android devices.',
      longDescription: [
        "This project was developed to eliminate the repetitive compilation steps in the Android kernel development process. Written in Bash, this script automatically sets up the necessary toolchain and configuration files for a specific device.",
        "When you run the script, it pulls the latest source code, applies necessary patches, and starts the compilation. As a result, it creates a ready-to-install zip package in 'AnyKernel3' format. This automation significantly speeds up the development cycle and reduces the likelihood of human error.",
        "Future plans include adding automatic configuration profiles for different Android versions and standardizing the build environment with Docker integration."
      ],
      tags: ['Bash', 'Linux', 'Android', 'Kernel'],
      url: `${socialLinks.github}/kernel-automation`,
      imageUrl: projectImage1,
    },
    {
      id: 'portfolio-website',
      title: '[TEST] Personal Portfolio Website',
      description: 'A modern website built with React and Tailwind CSS to showcase my skills and projects.',
      longDescription: [
        "This website you are currently viewing is a personal project I developed using modern web technologies. My goal was to both showcase my technical skills and provide a clean and interactive user experience.",
        "The project uses React for its component-based architecture and Tailwind CSS for rapid and responsive design. The site offers support for both Turkish and English languages and is designed to display flawlessly on all devices. Subtle animations, like the dynamic aurora effects in the background, add a touch of vibrancy.",
        "Sub-pages, such as project detail pages, were created using React Router DOM, providing a single-page application (SPA) experience. The React Context API was utilized for state management."
      ],
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      url: `${socialLinks.github}/portfolio-website`,
      imageUrl: projectImage2,
    },
    {
      id: 'twrp-device-tree',
      title: '[TEST] TWRP Device Tree',
      description: 'Source code that enables the creation of a TWRP recovery image for a specific Android device model.',
      longDescription: [
        "This project contains all the necessary configuration files and the device tree required to build a Team Win Recovery Project (TWRP) image for a specific Android device.",
        "The device tree allows TWRP to communicate correctly with the device's hardware components (screen, touch, storage, etc.). By working on this project, I gained in-depth knowledge of Android's low-level configuration, 'make' systems, and partition tables.",
        "A successful compilation results in a fully functional recovery image that can be used for tasks such as installing custom ROMs, creating backups, or gaining root access to the system."
      ],
      tags: ['Android', 'TWRP', 'C++', 'Make'],
      url: `${socialLinks.github}/twrp-device-tree`,
      imageUrl: projectImage3,
    },
  ],
};
