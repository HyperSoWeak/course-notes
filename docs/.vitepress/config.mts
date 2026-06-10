import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Course Notes',
  description: 'NTU course notes and exam reviews',
  lang: 'zh-TW',
  base: '/course-notes/',
  cleanUrls: true,
  markdown: { math: true },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('mjx-')
      }
    }
  },
  locales: {
    root: {
      label: '繁體中文',
      lang: 'zh-TW',
      title: 'Course Notes',
      description: '課程筆記與考前複習',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/' },
          { text: '114-2', link: '/114-2/' },
          { text: 'Agent Guide', link: '/agent-guide' }
        ],
        sidebar: {
          '/114-2/': [
            {
              text: '114-2',
              items: [
                { text: '總覽', link: '/114-2/' }
              ]
            },
            {
              text: '計算機系統實驗',
              collapsed: false,
              items: [
                { text: '課程首頁', link: '/114-2/CSL/' },
                { text: 'Final Overview', link: '/114-2/CSL/final/00_overview' },
                { text: '考前快速複習', link: '/114-2/CSL/final/99_exam_quick_review' },
                { text: 'Control / PID', link: '/114-2/CSL/final/01_control_pid' },
                { text: 'Structures / Trusses', link: '/114-2/CSL/final/02_structures_trusses_springs' },
                { text: 'Actuation / Motors', link: '/114-2/CSL/final/03_actuation_motors_transmission' },
                { text: 'Fabrication / CAD / Laser', link: '/114-2/CSL/final/04_fabrication_cad_laser' },
                { text: 'Early HCI', link: '/114-2/CSL/final/05_hci_history' },
                { text: 'Final Project Boat', link: '/114-2/CSL/final/06_final_project_boat' }
              ]
            },
            {
              text: '離散數學',
              collapsed: false,
              items: [
                { text: '課程首頁', link: '/114-2/DiscreteMath/' },
                { text: '總覽 & 速查', link: '/114-2/DiscreteMath/final/00_overview' },
                { text: '圖論', link: '/114-2/DiscreteMath/final/01_graph_theory' },
                { text: '樹', link: '/114-2/DiscreteMath/final/02_trees' },
                { text: '環', link: '/114-2/DiscreteMath/final/03_rings' },
                { text: '群', link: '/114-2/DiscreteMath/final/04_groups' },
                { text: '置換', link: '/114-2/DiscreteMath/final/05_permutations' },
                { text: '軌道 & Burnside', link: '/114-2/DiscreteMath/final/06_orbits_burnside' }
              ]
            }
          ],
          '/': [
            {
              text: 'Repo',
              items: [
                { text: '首頁', link: '/' },
                { text: 'Agent Guide', link: '/agent-guide' },
                { text: 'Materials Policy', link: '/materials' }
              ]
            }
          ]
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Course Notes',
      description: 'Course notes and exam reviews',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: '114-2', link: '/en/114-2/' },
          { text: 'Agent Guide', link: '/en/agent-guide' }
        ],
        sidebar: {
          '/en/114-2/': [
            {
              text: '114-2',
              items: [
                { text: 'Overview', link: '/en/114-2/' }
              ]
            },
            {
              text: 'Computer Systems Lab',
              collapsed: false,
              items: [
                { text: 'Course Home', link: '/en/114-2/CSL/' },
                { text: 'Final Overview', link: '/en/114-2/CSL/final/00_overview' },
                { text: 'Exam Quick Review', link: '/en/114-2/CSL/final/99_exam_quick_review' },
                { text: 'Control / PID', link: '/en/114-2/CSL/final/01_control_pid' },
                { text: 'Structures / Trusses', link: '/en/114-2/CSL/final/02_structures_trusses_springs' },
                { text: 'Actuation / Motors', link: '/en/114-2/CSL/final/03_actuation_motors_transmission' },
                { text: 'Fabrication / CAD / Laser', link: '/en/114-2/CSL/final/04_fabrication_cad_laser' },
                { text: 'Early HCI', link: '/en/114-2/CSL/final/05_hci_history' },
                { text: 'Final Project Boat', link: '/en/114-2/CSL/final/06_final_project_boat' }
              ]
            },
            {
              text: 'Discrete Mathematics',
              collapsed: false,
              items: [
                { text: 'Course Home', link: '/en/114-2/DiscreteMath/' },
                { text: 'Overview & Quick Ref', link: '/en/114-2/DiscreteMath/final/00_overview' },
                { text: 'Graph Theory', link: '/en/114-2/DiscreteMath/final/01_graph_theory' },
                { text: 'Trees', link: '/en/114-2/DiscreteMath/final/02_trees' },
                { text: 'Rings', link: '/en/114-2/DiscreteMath/final/03_rings' },
                { text: 'Groups', link: '/en/114-2/DiscreteMath/final/04_groups' },
                { text: 'Permutations', link: '/en/114-2/DiscreteMath/final/05_permutations' },
                { text: 'Orbits & Burnside', link: '/en/114-2/DiscreteMath/final/06_orbits_burnside' }
              ]
            }
          ],
          '/en/': [
            {
              text: 'Repo',
              items: [
                { text: 'Home', link: '/en/' },
                { text: 'Agent Guide', link: '/en/agent-guide' },
                { text: 'Materials Policy', link: '/en/materials' }
              ]
            }
          ]
        }
      }
    }
  },
  themeConfig: {
    siteTitle: 'Course Notes',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜尋',
                buttonAriaLabel: '搜尋'
              },
              modal: {
                noResultsText: '找不到結果',
                resetButtonTitle: '清除搜尋',
                backButtonTitle: '關閉搜尋',
                displayDetails: '顯示詳細列表',
                footer: {
                  selectText: '選取',
                  navigateText: '切換',
                  closeText: '關閉'
                }
              }
            }
          }
        }
      }
    },
    outline: {
      level: [2, 3]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
