import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';

const insertTask = item => TasksCollection.insert(item);
 
Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    const data = [
      {
          matkul: "Statistik dan Probabilitas",
          deskripsi: "Hipotesis",
          deadline: 2021-12-17,
          pengumpulan: "ethol",
          link: "https://ethol.pens.ac.id/mahasiswa/tugas-online",
          status: "todo",
          createdAt: new Date(),
        },
        {
          matkul: "Prak Konsep Jaringan",
          deskripsi: "Static Routing",
          deadline: 2021-12-30,
          pengumpulan: "classroom",
          link: "https://classroom.google.com/u/0/c/MzkyOTEyNjIzMzg1/a/NDI5ODg2MDkyMzQ1/details",
          status: "progress",
          createdAt: new Date(),
        },
        {
          matkul: "GIS",
          deskripsi: "Geocoding",
          deadline: 2021-12-19,
          pengumpulan: "google drive",
          link: "https://drive.google.com/drive/u/1/folders/1psLLNT-OauEGqWxWDMuXjkKYJuHP0gFz",
          status: "done",
          createdAt: new Date(),
        }
    ];
    
    data.forEach(insertTask);
  }
});