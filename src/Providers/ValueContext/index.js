import { createContext, useContext, useEffect, useState } from "react";
import Api from "../../Api";

const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Usuário",
    email:'',
    avatar: "./images/avatar.png",
    password: "",
  });
  const [wather, setWather] = useState([]);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    let getLocal = JSON.parse(localStorage.getItem("cards"));
    getLocal && setWather(...wather, getLocal);

    let userLocal = JSON.parse(localStorage.getItem("user"));
    setUser({
      name: userLocal.name,
      email: userLocal.email,
      avatar: userLocal.avatar,
      password: userLocal.password,
    });
  }, []);

  useEffect(() => {
    JSON.stringify(data) !== "{}" && setWather([data, ...wather]);
  }, [data]);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(wather));
    setData({});
    localStorage.setItem("user", JSON.stringify(user));
  }, [wather, user]);

  const actionLoginData = (src, userApi) => {
    let newUser 
    switch (src) {
      case 'google':
        newUser = {
          name: userApi.displayName,
          avatar: userApi.photoURL,
        };
        break;
        case 'facebook':
        newUser = {
          name: userApi.name,
          avatar: userApi.picture.data.url,
        };
        break;
    
      default:
        break;
    }

    
    setUser(newUser);
  };

  const handleRequest = async (city) => {
    city &&
      (await Api.get(
        `/data/2.5/weather?q=${city}&appid=7c2a7c0b39989e2c2e6461761b771c2e&units=metric`
      )
        .then((response) => {
          setData({
            id: response.data.id,
            city: response.data.name,
            temp: response.data.main.temp,
            tempMax: response.data.main.temp_max,
            tempMin: response.data.main.temp_min,
          });
          city = "";
        })
        .catch((error) => {
          setError(true);
          setInterval(() => {
            setError(false);
          }, 3000);
        }));
  };

  return (
    <ValueContext.Provider
      value={{
        user,
        setUser,
        actionLoginData,
        wather,
        setWather,
        data,
        setData,
        handleRequest,
        error,
        setError,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
export const useValues = () => useContext(ValueContext);
