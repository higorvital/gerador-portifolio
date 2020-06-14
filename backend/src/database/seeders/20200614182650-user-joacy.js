module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "users",
      [
        {
          name: "Joacy Mesquita da Silva",
          username: "Joacy",
          slug: "joacymesquita",
          email: "joacymesquita@gmail.com",
          color_id: "1",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: () => {}
};