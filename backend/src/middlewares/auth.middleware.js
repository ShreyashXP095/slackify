export const protectRoute = (req, res, next) => {
    if(!req.auth().isAuthenticated){
        return res.status(401).json({ message: 'Unauthorized - you must be logged in to access this route' });
    }
    next(); // user is authenticated, proceed to the next middleware or route handler
}   