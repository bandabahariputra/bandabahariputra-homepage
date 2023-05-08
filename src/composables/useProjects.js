import { ref } from 'vue';

const useProjects = () => {
  const projects = ref([
    {
      image: 'balai_wilayah_sungai_kalimantan_3.png',
      name: 'Balai Wilayah Sungai Kalimantan III',
      slug: 'balai-wilayah-sungai-kalimantan-iii',
      description:
        'A website for display information from Balai Wilayah Sungai Kalimantan III',
      stacks: ['PHP', 'Codeigniter', 'MySQL'],
      demo: 'https://sda.pu.go.id/balai/bwskalimantan3',
    },
  ]);

  const getProject = (slug) => {
    return projects.value.find((project) => project.slug === slug);
  };

  return { projects, getProject };
};

export { useProjects };
