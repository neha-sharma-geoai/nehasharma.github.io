// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by categories in reversed chronological order are automatically arranged.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Summary",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Download resume by clicking on the button on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-achievements",
          title: "achievements",
          description: "By God&#39;s grace, I have received the following awards...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/achievements/";
          },
        },{id: "nav-courses",
          title: "courses",
          description: "We conduct these courses in online and offline modes. For more information, contact - neha845sharma@yahoo.com",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "post-3dcitydb-v-4-0-0-setup-guide-for-absolute-beginners-part-2",
        
          title: '3DCityDB (v 4.0.0) Setup Guide for Absolute Beginners (Part 2) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ns_geoai/3dcitydb-v-4-0-0-setup-guide-for-absolute-beginners-part-2-21e50d8323c4?source=rss-15523201c57------2", "_blank");
          
        },
      },{id: "post-30-digital-twin-software-platforms-to-know-in-2025-the-ultimate-breakdown",
        
          title: '30 Digital Twin Software Platforms to Know in 2025 — The Ultimate Breakdown <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ns_geoai/30-digital-twin-software-platforms-to-know-in-2025-the-ultimate-breakdown-64ef3b542ce3?source=rss-15523201c57------2", "_blank");
          
        },
      },{id: "post-digital-twin-foundations-part-1-where-cities-learn-think-amp-evolve",
        
          title: 'Digital Twin Foundations (Part 1): Where Cities Learn, Think, &amp; Evolve <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ns_geoai/digital-twin-foundations-part-1-where-cities-learn-think-evolve-7ff61cfc369a?source=rss-15523201c57------2", "_blank");
          
        },
      },{id: "post-openai-master-models-catalog-2022-2025",
        
          title: 'OpenAI Master Models Catalog (2022–2025) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "OpenAI is a leading artificial intelligence research and deployment company, founded in 2015 with the mission to ensure that artificial&amp;#x2026;Continue reading on Medium »",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ns_geoai/openai-master-models-catalog-2022-2025-4c2049551cbb?source=rss-15523201c57------2", "_blank");
          
        },
      },{id: "post-export-google-scholar-publications-in-bibtex-format-for-your-personal-website",
        
          title: 'Export Google Scholar Publications in BibTeX Format for Your Personal Website <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A step-by-step guide to creating a clean, professional, and easy-to-update publications file using Google Scholar and BibTeX.Continue reading on Medium »",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ns_geoai/export-google-scholar-publications-in-bibtex-format-for-your-personal-website-7ab1bfb17764?source=rss-15523201c57------2", "_blank");
          
        },
      },{id: "post-60-generative-ai-python-libraries-powering-llms-vision-and-voice",
        
          title: '60+ Generative AI Python Libraries Powering LLMs, Vision, and Voice <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ns_geoai/the-genai-stack-50-python-libraries-powering-llms-vision-and-voice-c85828af5012?source=rss-15523201c57------2", "_blank");
          
        },
      },{id: "post-smart-buildings-and-cities-with-remote-sensing-and-gis-first-of-its-kind-global-volume-bridging",
        
          title: 'Smart Buildings and Cities with Remote Sensing and GIS: First-of-Its-Kind Global Volume Bridging…... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ns_geoai/smart-buildings-and-cities-with-remote-sensing-and-gis-a-first-of-its-kind-global-volume-bridging-a1fc7e377dd5?source=rss-15523201c57------2", "_blank");
          
        },
      },{id: "post-boosting-geoai-model-performance-with-test-time-augmentation",
        
          title: 'Boosting GeoAI Model Performance with Test Time Augmentation <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "GeoAI Blog",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.esri.com/arcgis-blog/products/arcgis-pro/geoai/boosting-geoai-model-performance-with-test-time-augmentation", "_blank");
          
        },
      },{id: "post-what-s-special-about-isro-s-xposat",
        
          title: 'What’s special about ISRO’s XPoSat? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "On January 1, 2024, ISRO&amp;#x2019;s PSLV-C58 successfully launched XPoSat, India&amp;#x2019;s first dedicated satellite for X-ray polarimetry. &amp;#x1F680; The&amp;#x2026;Continue reading on Medium »",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ns_geoai/whats-special-about-isro-s-xposat-ff26011f7efb?source=rss-15523201c57------2", "_blank");
          
        },
      },{id: "post-parting-ways-from-unimodal-single-tasking-to-multimodal-multitasking-deep-learning-models",
        
          title: 'Parting Ways from Unimodal Single-Tasking to Multimodal Multitasking Deep Learning Models <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ns_geoai/parting-ways-from-unimodal-single-tasking-to-multimodal-multitasking-deep-learning-models-ea81b2a77b55?source=rss-15523201c57------2", "_blank");
          
        },
      },{id: "post-arcgis-ai-models-year-in-review",
        
          title: 'ArcGIS AI Models – Year in Review <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "GeoAI Blog",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.esri.com/arcgis-blog/products/arcgis/geoai/esri-arcgis-ai-models-year-in-review", "_blank");
          
        },
      },{id: "post-custom-geospatial-dataloader-with-pytorch-and-rasterio",
        
          title: 'Custom Geospatial Dataloader with Pytorch and Rasterio <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ns_geoai/custom-geospatial-dataloader-with-pytorch-and-rasterio-4f6d896ef441?source=rss-15523201c57------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-first-book-got-published-smart-buildings-and-cities-with-remote-sensing-and-gis",
          title: 'My first book got published - Smart Buildings and Cities with Remote Sensing...',
          description: "",
          section: "News",},{id: "news-awarded-outstanding-achiever-in-ms-in-data-science-by-liverpool-john-moores-university-amp-amp-upgrad",
          title: 'Awarded ‘Outstanding Achiever’ in MS in Data Science by Liverpool John Moores University...',
          description: "",
          section: "News",},{id: "news-started-making-my-personal-website-on-github-sparkles-smile",
          title: 'Started making my personal website on GitHub! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-ship-detection-rgb-model",
          title: 'Ship Detection (RGB) Model',
          description: "Deep Learning Pretrained Model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-coffee-kiosk-project-walkthrough",
          title: 'Coffee Kiosk Project Walkthrough',
          description: "Walkthrough Projects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-lakeview-apartments-project-walkthrough",
          title: 'Lakeview Apartments Project Walkthrough',
          description: "Walkthrough Projects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-naya-raipur-legislative-assembly-project-walkthrough",
          title: 'Naya Raipur Legislative Assembly Project Walkthrough',
          description: "Walkthrough Projects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-naya-raipur-legislative-assembly-project",
          title: 'Naya Raipur Legislative Assembly Project',
          description: "Undergraduate Thesis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-urban-air-quality-analysis-for-ahmedabad-a-spatio-temporal-assessment",
          title: 'Urban Air Quality Analysis for Ahmedabad – A Spatio Temporal Assessment',
          description: "MTech Geomatics Thesis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-fine-grained-roof-type-classification-amp-multimodal-multitasking-building-detection-amp-height-estimation",
          title: 'Fine-Grained Roof Type Classification &amp;amp; Multimodal Multitasking Building Detection &amp;amp; Height Estimation',
          description: "MS Data Science Thesis (GeoAI)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-assessment-of-cropping-patterns-in-districts-of-gujarat",
          title: 'Assessment of Cropping Patterns in Districts of Gujarat',
          description: "GIS Foundation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-spatial-livability-index-model-slim-for-rajkot-municipal-corporation",
          title: 'Spatial Livability Index Model (SLIM) for Rajkot Municipal Corporation',
          description: "GIS for Governance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-predicting-urban-sprawl-of-industrial-city-surat",
          title: 'Predicting Urban Sprawl of Industrial City – Surat',
          description: "Geospatial Analytics and Modelling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%65%68%61%38%34%35%73%68%61%72%6D%61@%79%61%68%6F%6F.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/neha-sharma-geoai", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/neha-sharma-s", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@ns_geoai", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-1302-9593", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=JXyMLRcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
