module.exports = {
  log:  {
    level: "silent"
  },
  session:  {
    adapter: "memory"
  },
  connections:  {
    master: {
      adapter: "sails-memory",
      host: "localhost",
      user: "",
      password: "",
      database: "blogg"
    }
  },

  session: {
    adapter: "memory"
  },

  models: {
    migrate: "safe",
  },
};
