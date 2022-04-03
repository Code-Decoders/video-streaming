import { useState } from "react";
import styles from "./VideoPlayer.module.css";
import { FiChevronLeft, FiChevronRight, FiSend } from "react-icons/fi";
import Chat from "./chat";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [text, setText] = useState("");

  const [chat, setChat] = useState([{ user: "", msg: "", sent: true, length: 0 }]);

  const sendMessage = () => {
    setChat(prev => [
      ...prev,
      {
        'user': "You",
        'msg': text,
        'sent': true,
        "length": prev.length + 1
      }
    ])
    setText('')
  };

  return (
    <div
      className={styles["chat-bar-base"]}
      style={{ flex: 0.25, marginRight: '10px' }}
    >
      <div
        style={{
          display: "flex",
          paddingLeft: "15px",
          justifyContent: "start",
          alignItems: "center",
          gap: "13%",
          height: "65px",
        }}
      >
        {isOpen ? (
          <div
            style={{
              animationDelay: "0.4s",
              justifySelf: "center",
              color: "white",
              fontSize: "20px",
            }}
          >
            Stream Chat
          </div>
        ) : (
          <></>
        )}
      </div>

      {
        isOpen ?
          <div id="chat" style={{ flex: "1" }}>
            {chat.map((element, i) => {
              return <div
                style={{
                  marginBottom: '10px',
                  marginTop: "10px",
                  borderRadius: "10px",
                  color: "white",
                  paddingLeft: "5px",
                  marginLeft: "5px",
                  marginRight: "5px",
                  height: "30px",
                  width: "100%",
                  alignItems: "center",
                  display: "flex",
                }}
                key={element.user + element.length}>
                <div style={element.user === "You" ? { color: "yellow" } : {}}>{element.user}</div>: {element.msg}
              </div>
            })}
          </div> : <div style={{ flex: "1" }}></div>}
      {
        isOpen ?
          <div
            style={{
              backgroundColor: "var(--primary-tool)",
              alignItems: "center",
              display: "flex",
            }}
          >
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              style={{
                border: "solid 2px var(--primary)",
                borderRadius: "10px",
                color: "white",
                fontSize: "20px",
                height: "50px",
                width: "100%",
                backgroundColor: "var(--secondary)",
              }}
              type={"text"}
            />
            <div
              onClick={sendMessage}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "0",
                paddingRight: "15px",
                backgroundColor: "var(--secondary)",
              }}
            >
              <FiSend size={"25px"} />
            </div>
          </div> : undefined}
    </div>
  );
};

export default SideBar;
