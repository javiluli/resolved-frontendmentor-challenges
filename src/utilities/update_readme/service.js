// Obtener los 'shields.io' de skills y otros
export const getChallengesList = async (challens) => {
  return challens.map((challen) => {
    const {
      id,
      frontendmentor: { title, try_challenge },
      source_code,
      live_preview,
    } = challen
    return { id, title, source_code, live_preview, try_challenge }
  })
}
