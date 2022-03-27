![Gamoly](https://user-images.githubusercontent.com/22388017/160281998-89313bba-6b0f-41cd-8b81-2b45479d445e.png)

### Gamoly is a decentralized dapp for streaming and sharing your videos and buying NFT's of the best moments.

#### For the live site visit:

---

### `Project Overview:`

You all must have visited some or the other video streaming sites and this one
is no different(well in streaming services) but what makes it different is that it uses
blockchain, web3 and the concept of decentralization for everything and by everything we mean it!<br>
<br>

---

### `Tech Stack`

* <img src="https://user-images.githubusercontent.com/22388017/160281180-667452d7-0fa5-4459-b853-4f7d8c1bbb7f.png" width="20" height="20"/>&nbsp;&nbsp;Next JS
* <img src="https://user-images.githubusercontent.com/22388017/160281711-2dea0da1-3350-46ba-9ec5-80c262b3f29b.png" width="20" height="20"/>&nbsp;&nbsp;Solidity
* <img src="https://user-images.githubusercontent.com/22388017/160281277-dcd83bd7-afbf-4e5b-aaee-2d3fca7919bc.svg" width="20" height="20"/>&nbsp;&nbsp;Polygon
* <img src="https://user-images.githubusercontent.com/22388017/160281440-3153952f-995e-492b-9ec2-abd84eb55fb0.png" width="20" height="20"/>&nbsp;&nbsp;Livepeer
* <img src="https://user-images.githubusercontent.com/22388017/160281520-1bc29d5f-a3e7-4288-b42d-46b5b87d51d5.png" width="20" height="20"/>&nbsp;&nbsp;Arcana

---

### `How Gamoly works?`

Well Gamoly uses blockchain at its core. And this is done by implementing the
following technologies.<br><br>
1. First of all  the login page:
   - We use Arcana auth for authentications and logins (which basically creates
       a encryted address for the user) so all you need to do is to click
       a button and you are ready to go.<br>
   - It stores the credentials in a decentralized way so there is no chance of
       data leaks.
1. After you are logged in you can either choose to watch live streams or create
   one!
    - So if you chose to watch a stream you'll be presented by a video player
        which is is created with video.js and next js. All the data for the
        streams are managed by a smart contract.
    - If you chose to create a stream you will be greeted with a Create Stream
        where you'll be asked for the name of the stream page where you'll get your Stream Id, Stream Key, and        other credentials and after filling the details your stream will be ready to go live. Our streaming services are provided by livepeer, a decentralized video streaming network built on Ethereum blockchain. 
1. MarketPlace: Gamoly has an official marketplace where you can sell or buy the best
   streaming moments through videos and images. You can even resell them or have
   a full collection of your favorite streamers!

---

#### `Additional features`
  1. You can comment on others stream and share it.
  1. Find other streams on the homepage.

### `The problem it solves`
  So there are lots of video streaming sites which provides streaming features
  but Gamoly is built different!
  
  - It uses blockchain for data storage and management so this makes it super
      secure since your data is stored in a smart contract.
  - For streaming it uses livepeer's decentralized video streaming solution
      which makes streaming much more safe and secure.
  - For file storage we use Filecoin's decentralized storage network which is
      similar to IPFS but stores data in a more encryted way.
  - For NFT management we use solidity, truffle and filecoin all mixed together
      to create a secure place for buying and selling it.
  - We don't store data with ourselves which means even we can't access your
      data directly and this is true even for login credentials!! We use
      a method similar to Zero-knowledge-proof which makes your privacy more
      secure.
  - And last but not the least for subscriptions and memberships we use money
      streaming (that is you are charged for every second instead of a full month, a bit complicated :)).
  
---

### `Challenges we ran into`
  While finishing this project we had to use a lot of technologies that we were
  working on for the first time.

 1. Integrating Arcana with Next Js:
      
      - We created the whole project with Next Js and since it uses pre-rendering we
    couldn't use any package, directly, that would use the window object and Arcana was one
    of them. So we had to export it dynamically through 'next/dynamic' but that
    seemed to be an in-efficient way. So we imported it while loading the login
    page and used the same instance everywhere by creating a context of it.
  
 2. Livepeer integration:
      - Integrating livepeer was another challenge since we just not had to
          create a livepeer connection but use that same connection for
          streaming every stream by the user. We did that by creating a service
          for user through which multiple users could request for stremaing at
          the same time.
 3. Storing stremaing details in smart contrat:
      - We had to store every streaming detail for each user in smart contract.
          And the main problem was to stop the user from creating another
          stream while he was already streming. We created a simple switch which
          would turn on when user is streaming and will prevent him from
          creating another stream. 
 4. Creating smart contract for the whole process to work:
      - Creating such a complex smart contract which could handle everything was
          too a challenge. We had to create different structs for users, streams
          and NFTs. The main problem arose in deploying them since deploying
          each contract separately wouldn't make sense so we integrated all
          these contracts into a single one and deployed it.






