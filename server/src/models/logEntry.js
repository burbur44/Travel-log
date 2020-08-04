


var mongoose = require('mongoose');
  var Schema = mongoose.Schema;


const requiredString ={
    type: String,
    required: true
}

  var LogEntrySchema = new Schema({
    title:requiredString,

    description : String,

    comments : String,

    image : String,

    latitude:{
        type: Number,
        required : true,
        min: -90,
        max: 90,
    },
    longitude:{
        type: Number,
        required : true,
        min: -180,
        max: 180,
    },
    visitDate:{
        required: true,
        type: Date,
    },
    
    created_at:{type: Date, default: Date.now, required: true},
    updated_at:{type: Date, default: Date.now},


    rating:{
        type: Number,
        min: [0],
        max: [10],
        default: 0,
    },

    meta: {
      votes: Number,
      favs:  Number
    }
  });

  const LogEntry = mongoose.model('logEntry', LogEntrySchema);

  module.exports = LogEntry;