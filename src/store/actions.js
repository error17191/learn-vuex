import axios from 'axios'

export const fetchNumber = ({ commit }, { min = 5, max = 20 }) => {
  axios.get(`http://fresher.app:8000/api/random?min=${min}&max=${max}`).then((response) => {
    commit('addRandomNumber', response.data.number)
  })
}
