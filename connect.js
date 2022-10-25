const {MongoClient} = require ("mongodb");

module.exports= {
    Db: {},

    async connect() {
        try{
            const client= await MongoClient.connect(process.env.MONGODB_URL);
            this.Db= client.db("stack");
            console.log(this.Db);
        }
        catch (err) {
        console.error(err);
        }
    }
}
