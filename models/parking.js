const modelParking = {
    queryGetChars: "SELECT * FROM Parking",
    queryGetCharByMatricula: `SELECT * FROM Parking WHERE Matricula = ?`,
    queryDeleteCharByMatricula: `UPDATE Parking SET Active = 'N' WHERE Matricula = ?`,
    queryAddChar: `INSERT INTO Parking (NameClient, IncomingVehicle, EntryTime, OutgoingVehicle, DepartureTime, TotalPrice$30PerHour, SpecialIndication, Active) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    queryCharExists: `SELECT * FROM Parking WHERE NameClient = ?`,
    queryUpdateCharByChar: `UPDATE Parking SET NameClient = ?, IncomingVehicle = ?, EntryTime = ?, OutgoingVehicle = ?, DepartureTime = ?, TotalPrice$30PerHour = ?, SpecialIndication = ?, Active = ? WHERE NameClient = ?`
}

module.exports = modelParking