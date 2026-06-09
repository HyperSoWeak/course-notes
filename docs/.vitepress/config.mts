import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Course Notes',
  description: 'NTU course notes and exam reviews',
  lang: 'zh-TW',
  base: '/course-notes/',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'Course Notes',
    nav: [
      { text: 'Home', link: '/' },
      { text: '114-2', link: '/114-2/' }
    ],
    sidebar: {
      '/114-2/': [
        {
          text: '114-2',
          items: [
            { text: 'Overview', link: '/114-2/' }
          ]
        },
        {
          text: '計算機系統實驗',
          collapsed: false,
          items: [
            { text: 'Course Home', link: '/114-2/CSL/' },
            { text: 'Final Overview', link: '/114-2/CSL/final/00_overview' },
            { text: 'Exam Quick Review', link: '/114-2/CSL/final/99_exam_quick_review' },
            { text: 'Control / PID', link: '/114-2/CSL/final/01_control_pid' },
            { text: 'Structures / Trusses', link: '/114-2/CSL/final/02_structures_trusses_springs' },
            { text: 'Actuation / Motors', link: '/114-2/CSL/final/03_actuation_motors_transmission' },
            { text: 'Fabrication / CAD / Laser', link: '/114-2/CSL/final/04_fabrication_cad_laser' },
            { text: 'Early HCI', link: '/114-2/CSL/final/05_hci_history' },
            { text: 'Final Project Boat', link: '/114-2/CSL/final/06_final_project_boat' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
