export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            errors: error.errors.map(err => ({
                path: err.path.join("."), // Nombre del campo
                message: err.message
            }))
        });
    }
};
