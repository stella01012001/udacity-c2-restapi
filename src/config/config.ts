export const config = {
  dev: {
    username: "postgres",
    password: "database-1",
    database: "test",
    host: "database-1.crr1zvfudt5j.ap-southeast-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "ap-southeast-1",
    aws_profile: "default",
    aws_media_bucket: "testbucket812301890985",
  },
  jwt: {
    secret: "mngulam",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
