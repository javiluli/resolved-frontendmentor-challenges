// Obtener los 'shields.io' de skills y otros
export const getChallengesList = async (challens) => {
  return challens.map((challen) => {
    const { id, title, source_code, live_preview, try_challenge } = challen
    return { id, title, source_code, live_preview, try_challenge }
  })
}
