"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfig = TypeOrmConfig;
require("dotenv/config");
function TypeOrmConfig() {
    const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;
    return {
        type: "postgres",
        host: DB_HOST,
        port: +DB_PORT,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        autoLoadEntities: false,
        synchronize: true,
        entities: [
            "dist/**/**/**/*.entity{.ts, .js}",
            "dist/**/**/*.entity{.ts, .js}",
        ],
    };
}
//# sourceMappingURL=typeorm.config.js.map