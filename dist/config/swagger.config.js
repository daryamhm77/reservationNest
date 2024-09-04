"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerConfigInit = SwaggerConfigInit;
const swagger_1 = require("@nestjs/swagger");
function SwaggerConfigInit(app) {
    const document = new swagger_1.DocumentBuilder()
        .setTitle('Reservation')
        .setDescription('backend of a reserve website')
        .setVersion('v0.0.1')
        .addBearerAuth(SwaggerAuthConfig(), 'Authorization')
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, document);
    swagger_1.SwaggerModule.setup('/swagger', app, swaggerDocument);
}
function SwaggerAuthConfig() {
    return {
        type: 'http',
        bearerFormat: 'JWT',
        in: 'header',
        scheme: 'bearer',
    };
}
//# sourceMappingURL=swagger.config.js.map