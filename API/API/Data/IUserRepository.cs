using API.Models;

namespace API.Data
{
    public interface IUserRepository
    {
        User Create(User user);

        User GetByEmail(string email);
        User GetById(int id);
    }
}
