module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "colors",
      [
        {
          main: "#003554",
          secondary: "#051923",
          text: "#ecf0ff",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: () => {}
};