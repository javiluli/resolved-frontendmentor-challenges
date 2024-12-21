import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Obtener los 'shields.io' de skills y otros
export const getChallengesList = async (challens) => {
  return challens.map((challen) => {
    const { id, title, live_preview, source_code, try_challenge, test_state } = challen
    return { id, title, live_preview, source_code, try_challenge, test_state }
  })
}

// Obtener repositorios desde un perfil de GitHub

const pathAPI = path.join(__dirname, './api.json')
export const getData = async () => {
  let data = await fs.readFile(pathAPI, 'utf-8')
  data = JSON.parse(data)

  return data.map((challen) => {
    const { id, title, live_preview, source_code, try_challenge, test_state } = challen
    return { id, title, live_preview, source_code, try_challenge, test_state }
  })
}
