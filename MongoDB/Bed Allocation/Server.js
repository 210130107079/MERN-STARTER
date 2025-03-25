import {Room} from './Models/Room.js'
import {Patient} from './Models/Patient.js'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 7000

app.use(express.json())

mongoose.connect("mongodb+srv://narutouzumakixxxhinata:naruto9898@cluster0.ypk8z.mongodb.net/bed_db?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err))

    async function initializeRoomsAndBeds() {
        const roomCount = await Room.countDocuments();
        
        if (roomCount === 0) {
          const rooms = [
            { roomNumber: 101, totalBeds: 30 },
            { roomNumber: 102, totalBeds: 30 },
            { roomNumber: 103, totalBeds: 30 }
          ];
          
          for (const room of rooms) {
            const newRoom = new Room(room);
            const beds = [];
            
            for (let i = 1; i <= room.totalBeds; i++) {
              beds.push({
                bedNumber: i,
                isOccupied: false
              });
            }
            
            newRoom.beds = beds;
            await newRoom.save();
          }
          
          console.log('Rooms and beds initialized');
        }
      }
      
      initializeRoomsAndBeds();

//Get All Available Beds
app.get('/api/beds/available',async (req,res)=>{
    try
    {
        const rooms = await Room.find()
        const availableBeds = rooms.map(room=>{
            return {
                roomNumber: room.roomNumber,
                beds: room.beds.filter(bed=>!bed.isOccupied).map(bed=>bed.bedNumber)
            }
        })
        res.json(availableBeds)
    }
    catch(err)
    {
        return res.status(500).json({error: err.message})
    }
})


//Asign a Bed to a Patient
app.post('/api/beds/assign',async (req,res)=>{
    const {name,age,roomNumber,bedNumber} = req.body
    try
    {
        const room = await Room.findOne({roomNumber})
        if(!room){
            return res.status(404).json({error: "Room not found"})
        }

        const bedIndex = await beds.findIndex(bed=>bed.bedNumber === bedNumber && !bed.isOccupied)
        if(bedIndex === -1){
            return res.status(404).json({error: "Bed not found"})
        }

        const patient = new Patient({
            name,
            age,
            roomNumber,
            bedNumber
        })

        room.beds[bedIndex].isOccupied = true
        await room.save()
        await patient.save()

        res.json(patient)
    }
    catch(err)
    {
        return res.status(500).json({error: err.message})
    }
})

app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
})