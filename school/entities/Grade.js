const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'Grade',
  tableName: 'GRADE',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    score: {
      type: 'integer',
      nullable: false,
    },
  },
  relations: {
    student: {
      type: 'many-to-one',
      target: 'Student',
      joinColumn: {
        name: 'student_id',
      },
      nullable: false,
    },
    subject: {
      type: 'many-to-one',
      target: 'Subject',
      joinColumn: {
        name: 'subject_id',
      },
      nullable: false,
    },
  },
})