import works from 'data/works'

const getWorkSlugs = (): string[] => {
  const workSlugs: string[] = []
  works.forEach((work) => {
    work.slug && workSlugs.push('/deliverables/' + work.slug)
  })
  return workSlugs
}

export default getWorkSlugs
