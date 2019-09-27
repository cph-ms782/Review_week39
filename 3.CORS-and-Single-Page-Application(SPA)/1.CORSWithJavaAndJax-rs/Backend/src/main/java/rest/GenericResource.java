package rest;

import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author martin
 */
@Path("test")
public class GenericResource {

    @Context
    private UriInfo context;
    private static List<String> objects =  new ArrayList();
    
    /**
     * Creates a new instance of GenericResource
     */
    public GenericResource() {
    }

    /**
     * Retrieves representation of an instance of rest.GenericResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        return objects.toString();
    }
    
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson(@PathParam("id") int id) {
        return objects.get(id);
    }
    
    @GET
    @Path("fill")
    @Produces(MediaType.APPLICATION_JSON)
    public String fillJson() {
        objects.add("{\"name\" : \"Peter Pan\"}");
        objects.add("{\"name\" : \"Peter Pondre\"}");
        objects.add("{\"name\" : \"Peter Pæn\"}");
        objects.add("{\"name\" : \"Jens Pan\"}");
        objects.add("{\"name\" : \"Børge Pan\"}");
        return "{\"status\" : \"Filled\"}";
    }

    /** 
     * PUT method for updating or creating an instance of GenericResource
     * @param content representation for the resource
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<String> putJson(String content) {
        objects.add(content);
        return objects;
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<String> putJson(@PathParam("id") int id, String content) {
        objects.set(id, content);
        return objects;
    }
    
    @DELETE
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public String putJson(@PathParam("id") int id) {
        objects.remove(id);
        return "{\"status\" : \"Deleted\"}";
    }
}
