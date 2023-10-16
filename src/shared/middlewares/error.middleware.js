export const notFoundErrorHandler = async (request, response, next) => {

    const error = new Error(`${request.method} ${request.originalUrl} not found`)
    error['status'] = 404;

    next(error);
}

export const globalErrorHandler = async (
    error,
    request,
    response,
    next
) => {

    const statusCode = response.statusCode ? response.statusCode : 500;

    response.status((error['status'] || statusCode))
    response.json({
        status: 'FAILURE',
        message: error.message
    });
}