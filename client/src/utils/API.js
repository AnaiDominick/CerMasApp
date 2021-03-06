import axios from "axios";

export default {

  // Gets all alumnos
  getAlumnos: function () {
    console.log("getAlumnos API");
    return axios.get('/api/alumnos/');
  },
  // Gets the alumno with the given id
  getOneAlumno: function (id) {
    return axios.get('/api/alumnos/' + id);
  },
  // Deletes the alumno with the given id
  deleteAlumno: function (id) {
    return axios.delete('/api/alumnos/' + id);
  },
  // Saves a alumno to the database
  saveAlumno: function (alumnoData) {
    return axios.post('/api/alumnos', alumnoData);
  },

  updateAlumno: function (id, alumnoData) {
    return axios.put('/api/alumnos/' + id, alumnoData)
  },

  //----------CSV-----------------------

  saveCSV: function (csvData) {
    return axios.post("/api/userIndex", csvData);
  },

  getCSV: function (csvData) {
    return axios.get("/api/userIndex", csvData);
  },

  savePopulate: function (populateData) {
    return axios.post("/api/populateduser", populateData)
  },


  //------USER--------
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },

  //----------AUTHENTICATION---------------
  getUser: function (id) {
    return axios.get(`/api/authenticate/${id}`);
  },

  // login: function (userData) {
  //   return axios.post("/api/authenticate", userData);
  // },

  login: function (userData) {
    return axios.post("/api/login", userData);
  },

};
