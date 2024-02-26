import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import Swal from 'sweetalert2';
// import { webkitSpeechRecognition } from 'webkitSpeechRecognition';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: [ './chatbot.component.scss' ],
})
export class ChatbotComponent implements OnChanges {
@Input() showPopUp :boolean = false;
@Output() popUp = new EventEmitter();
messages: any = []; // Array to store messages
newMessage: string = ''; // Variable to store the new message input
// showEmojiPicker: boolean = false;
public recognition: any; // Setting recognition as public
constructor () {
  // generating messages from two users alternating
  this.messages.push({ sender: 'user1', content: 'Hello, how are you?' });
  this.messages.push({ sender: 'user2', content: 'I am doing well, thank you!' });
  // Add more messages as needed
}

ngOnChanges () {
  if (this.showPopUp) {
    Swal.fire({
      title: 'Sweet!',
      icon: 'info',
      text: 'Custom Text',
      confirmButtonColor: '#5371FF',

      customClass: {
        title: 'custom-title-class',
        htmlContainer: 'swal2-content',
      },
    }).then((result) => {
      if (result.isDismissed === true) {
        this.popUp.emit();
        console.log('e');
      }
    })
      .catch((err) => {
        console.log(err);
      });

  }
}

sendMessage () {
  // Add the new message to the messages array with sender 'user1'
  if (this.newMessage.trim() !== '') {
    this.messages.push({ sender: 'user1', content: this.newMessage });
    this.newMessage = ''; // Clear the input field after sending the message
  }

  // Simulate a response from 'user2' after a delay
  setTimeout(() => {
    //  response message from user2
    const responseMessage = 'I received your message!';
    this.messages.push({ sender: 'user2', content: responseMessage });
  }, 1000); // Simulate a delay of 1 second (1000 milliseconds)
}

closeChatbot () {
  this.showPopUp = false; // Close the chatbot UI
}

  // toggleEmojiPicker () {
  //   this.showEmojiPicker = !this.showEmojiPicker;
  // }

  // addEmoji (event: any) {

  //   this.newMessage += event;
  //   this.showEmojiPicker = false;
  // }

  // startVoiceListening() {
  //   if ('webkitSpeechRecognition' in window) {
  //     this.recognition = new (window as any).webkitSpeechRecognition();
  //     this.recognition.lang = 'en-US';

  //     this.recognition.onresult = (event: any) => {
  //       const { transcript } = event.results[0][0];
  //       this.newMessage += transcript;
  //     };

  //     this.recognition.start();
  //   } else {
  //     alert('Speech recognition not supported in this browser.');
  //   }
  // }

  // stopVoiceListening() {
  //   if (this.recognition) {
  //     this.recognition.stop();
  //     console.log('Recognition stopped');
  //     alert('Voice recognition stopped');
  //   }
  // }


}
