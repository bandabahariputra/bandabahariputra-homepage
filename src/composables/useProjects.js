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
    {
      image: 'car_rental.png',
      name: 'Car Rental',
      slug: 'car-rental',
      description: 'A landing page to show the car to be rented',
      stacks: ['Nuxt'],
      demo: 'https://aryarentalcar.com',
    },
    {
      image: 'quran_online.png',
      name: 'Quran Online',
      slug: 'quran-online',
      description: 'An app to read quran and show prayer schedule',
      stacks: ['Nuxt'],
      demo: 'https://quran-onlen.netlify.app',
    },
  ]);

  const getProject = (slug) => {
    return projects.value.find((project) => project.slug === slug);
  };

  return { projects, getProject };
};

export { useProjects };
